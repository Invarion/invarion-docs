import Hogan from 'hogan.js';
import autocomplete from 'autocomplete.js';
import $ from 'autocomplete.js/zepto';
import LunrSearchAdapter from './lunar-search';
import templates from './templates';
import utils from 'docusaurus-lunr-search/src/theme/SearchBar/utils';

const sectionLabels = {
  rapidplan: 'RapidPlan',
  rapidpath: 'RapidPath',
  'rapidplan-online': 'RapidPlan Online',
  'rapidpath-online': 'RapidPath Online',
  'accounts-setup': 'Accounts & Setup',
};

function getSectionLabel(url) {
  if (!url) {
    return null;
  }

  const segment = url.replace(/^\/+/, '').split('/')[0];
  return sectionLabels[segment] || null;
}

class DocSearch {
  constructor({
    searchDocs,
    searchIndex,
    inputSelector,
    debug = false,
    baseUrl = '/',
    queryDataCallback = null,
    autocompleteOptions = {
      debug: false,
      hint: false,
      autoselect: false,
    },
    transformData = false,
    queryHook = false,
    handleSelected = false,
    layout = 'column',
    maxHits = 5,
  }) {
    this.input = DocSearch.getInputFromSelector(inputSelector);
    this.queryDataCallback = queryDataCallback || null;

    const autocompleteOptionsDebug =
      autocompleteOptions && autocompleteOptions.debug
        ? autocompleteOptions.debug
        : false;
    autocompleteOptions.debug = debug || autocompleteOptionsDebug;
    this.autocompleteOptions = autocompleteOptions;
    this.autocompleteOptions.cssClasses = this.autocompleteOptions.cssClasses || {};
    this.autocompleteOptions.cssClasses.prefix =
      this.autocompleteOptions.cssClasses.prefix || 'ds';
    const inputAriaLabel =
      this.input &&
      typeof this.input.attr === 'function' &&
      this.input.attr('aria-label');
    this.autocompleteOptions.ariaLabel =
      this.autocompleteOptions.ariaLabel || inputAriaLabel || 'search input';

    this.isSimpleLayout = layout === 'simple';
    this.client = new LunrSearchAdapter(searchDocs, searchIndex, baseUrl, maxHits);

    this.autocomplete = autocomplete(this.input, autocompleteOptions, [
      {
        source: this.getAutocompleteSource(transformData, queryHook),
        templates: {
          suggestion: DocSearch.getSuggestionTemplate(this.isSimpleLayout),
          footer: templates.footer,
          empty: DocSearch.getEmptyTemplate(),
        },
      },
    ]);

    const customHandleSelected = handleSelected;
    this.handleSelected = customHandleSelected || this.handleSelected;

    if (customHandleSelected) {
      $('.algolia-autocomplete').on('click', '.ds-suggestions a', (event) => {
        event.preventDefault();
      });
    }

    this.autocomplete.on(
      'autocomplete:selected',
      this.handleSelected.bind(null, this.autocomplete.autocomplete),
    );

    this.autocomplete.on(
      'autocomplete:shown',
      this.handleShown.bind(null, this.input),
    );

    document.addEventListener('keydown', (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        this.input.focus();
        event.preventDefault();
      }
    });
  }

  static getInputFromSelector(selector) {
    const input = $(selector).filter('input');
    return input.length ? $(input[0]) : null;
  }

  getAutocompleteSource(transformData, queryHook) {
    return (query, callback) => {
      if (queryHook) {
        query = queryHook(query) || query;
      }
      this.client.search(query).then((hits) => {
        if (this.queryDataCallback && typeof this.queryDataCallback === 'function') {
          this.queryDataCallback(hits);
        }
        if (transformData) {
          hits = transformData(hits) || hits;
        }
        callback(DocSearch.formatHits(hits));
      });
    };
  }

  static formatHits(receivedHits) {
    const clonedHits = utils.deepClone(receivedHits);
    const hits = clonedHits.map((hit) => {
      if (hit._highlightResult) {
        hit._highlightResult = utils.mergeKeyWithParent(
          hit._highlightResult,
          'hierarchy',
        );
      }
      return utils.mergeKeyWithParent(hit, 'hierarchy');
    });

    let groupedHits = utils.groupBy(hits, 'lvl0');
    $.each(groupedHits, (level, collection) => {
      const groupedHitsByLvl1 = utils.groupBy(collection, 'lvl1');
      groupedHits[level] = utils.flattenAndFlagFirst(
        groupedHitsByLvl1,
        'isSubCategoryHeader',
      );
    });
    groupedHits = utils.flattenAndFlagFirst(groupedHits, 'isCategoryHeader');

    return groupedHits.map((hit) => {
      const url = DocSearch.formatURL(hit);
      const category = utils.getHighlightedValue(hit, 'lvl0');
      const subcategory = utils.getHighlightedValue(hit, 'lvl1') || category;
      const displayTitle = utils
        .compact([
          utils.getHighlightedValue(hit, 'lvl2') || subcategory,
          utils.getHighlightedValue(hit, 'lvl3'),
          utils.getHighlightedValue(hit, 'lvl4'),
          utils.getHighlightedValue(hit, 'lvl5'),
          utils.getHighlightedValue(hit, 'lvl6'),
        ])
        .join(
          '<span class="aa-suggestion-title-separator" aria-hidden="true"> &rsaquo; </span>',
        );
      const text =
        hit._snippetResult &&
        hit._snippetResult.content &&
        hit._snippetResult.content.value
          ? hit._snippetResult.content.value
          : hit.content;
      const isTextOrSubcategoryNonEmpty =
        (subcategory && subcategory !== '') ||
        (displayTitle && displayTitle !== '');
      const isLvl1EmptyOrDuplicate =
        !subcategory || subcategory === '' || subcategory === category;
      const isLvl2 =
        displayTitle && displayTitle !== '' && displayTitle !== subcategory;
      const isLvl1 =
        !isLvl2 &&
        subcategory &&
        subcategory !== '' &&
        subcategory !== category;
      const isLvl0 = !isLvl1 && !isLvl2;

      return {
        isLvl0,
        isLvl1,
        isLvl2,
        isLvl1EmptyOrDuplicate,
        isCategoryHeader: hit.isCategoryHeader,
        isSubCategoryHeader: hit.isSubCategoryHeader,
        isTextOrSubcategoryNonEmpty,
        category,
        section: getSectionLabel(url),
        subcategory,
        title: displayTitle,
        text,
        url,
        version: hit.version,
      };
    });
  }

  static formatURL(hit) {
    if (hit.url) {
      return hit.url;
    }
    if (hit.anchor) {
      return `#${hit.anchor}`;
    }
    return null;
  }

  static getEmptyTemplate() {
    return (args) => Hogan.compile(templates.empty).render(args);
  }

  static getSuggestionTemplate(isSimpleLayout) {
    const stringTemplate = isSimpleLayout
      ? templates.suggestionSimple
      : templates.suggestion;
    const template = Hogan.compile(stringTemplate);
    return (suggestion) => template.render(suggestion);
  }

  handleSelected(input, event, suggestion, datasetNumber, context = {}) {
    if (context.selectionMethod === 'click') {
      return;
    }

    input.setVal('');
    window.location.assign(suggestion.url);
  }

  handleShown(input) {
    const middleOfInput = input.offset().left + input.width() / 2;
    let middleOfWindow = $(document).width() / 2;

    if (isNaN(middleOfWindow)) {
      middleOfWindow = 900;
    }

    const alignClass =
      middleOfInput - middleOfWindow >= 0
        ? 'algolia-autocomplete-right'
        : 'algolia-autocomplete-left';
    const otherAlignClass =
      middleOfInput - middleOfWindow < 0
        ? 'algolia-autocomplete-right'
        : 'algolia-autocomplete-left';
    const autocompleteWrapper = input.closest('.algolia-autocomplete');

    if (!autocompleteWrapper.hasClass(alignClass)) {
      autocompleteWrapper.addClass(alignClass);
    }

    if (autocompleteWrapper.hasClass(otherAlignClass)) {
      autocompleteWrapper.removeClass(otherAlignClass);
    }
  }
}

export default DocSearch;
