import React, {useCallback, useRef, useState} from 'react';
import clsx from 'clsx';
import {useHistory} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {usePluginData} from '@docusaurus/useGlobalData';

const Search = (props) => {
  const initialized = useRef(false);
  const searchBarRef = useRef(null);
  const [indexReady, setIndexReady] = useState(false);
  const history = useHistory();
  const {siteConfig = {}} = useDocusaurusContext();
  const pluginConfig = (siteConfig.plugins || []).find(
    (plugin) =>
      Array.isArray(plugin) &&
      typeof plugin[0] === 'string' &&
      plugin[0].includes('docusaurus-lunr-search'),
  );
  const isBrowser = useIsBrowser();
  const {baseUrl} = siteConfig;
  const assetUrl = (pluginConfig && pluginConfig[1]?.assetUrl) || baseUrl;
  const pluginData = usePluginData('docusaurus-lunr-search');

  const initAlgolia = (searchDocs, searchIndex, DocSearch, options) => {
    new DocSearch({
      searchDocs,
      searchIndex,
      baseUrl,
      inputSelector: '#search_input_react',
      handleSelected: (_input, _event, suggestion) => {
        const url = suggestion.url || '/';
        _input.setVal('');
        _event.target.blur();
        history.push(url);
      },
      maxHits: options.maxHits,
    });
  };

  const getSearchDoc = () =>
    process.env.NODE_ENV === 'production'
      ? fetch(`${assetUrl}${pluginData.fileNames.searchDoc}`).then((content) =>
          content.json(),
        )
      : Promise.resolve({});

  const getLunrIndex = () =>
    process.env.NODE_ENV === 'production'
      ? fetch(`${assetUrl}${pluginData.fileNames.lunrIndex}`).then((content) =>
          content.json(),
        )
      : Promise.resolve([]);

  const loadAlgolia = () => {
    if (!initialized.current) {
      Promise.all([
        getSearchDoc(),
        getLunrIndex(),
        import('./DocSearch'),
        import('docusaurus-lunr-search/src/theme/SearchBar/algolia.css'),
      ]).then(([searchDocFile, searchIndex, {default: DocSearch}]) => {
        const {searchDocs, options} = searchDocFile;
        if (!searchDocs || searchDocs.length === 0) {
          return;
        }
        initAlgolia(searchDocs, searchIndex, DocSearch, options);
        setIndexReady(true);
      });
      initialized.current = true;
    }
  };

  const toggleSearchIconClick = useCallback(
    (event) => {
      if (!searchBarRef.current.contains(event.target)) {
        searchBarRef.current.focus();
      }

      props.handleSearchBarToggle &&
        props.handleSearchBarToggle(!props.isSearchBarExpanded);
    },
    [props],
  );

  let placeholder;
  if (isBrowser) {
    loadAlgolia();
    placeholder = window.navigator.platform.startsWith('Mac')
      ? 'Search Cmd+K'
      : 'Search Ctrl+K';
  }

  return (
    <div className="navbar__search" key="search-box">
      <span
        aria-label="expand searchbar"
        role="button"
        className={clsx('search-icon', {
          'search-icon-hidden': props.isSearchBarExpanded,
        })}
        onClick={toggleSearchIconClick}
        onKeyDown={toggleSearchIconClick}
        tabIndex={0}
      />
      <input
        id="search_input_react"
        type="search"
        placeholder={indexReady ? placeholder : 'Loading...'}
        aria-label="Search"
        className={clsx(
          'navbar__search-input',
          {'search-bar-expanded': props.isSearchBarExpanded},
          {'search-bar': !props.isSearchBarExpanded},
        )}
        onClick={loadAlgolia}
        onMouseOver={loadAlgolia}
        onFocus={toggleSearchIconClick}
        onBlur={toggleSearchIconClick}
        ref={searchBarRef}
        disabled={!indexReady}
        spellCheck={false}
      />
    </div>
  );
};

export default Search;
