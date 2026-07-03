// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Invarion Help Center',
  url: 'https://help.invarion.com/',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/cropped-favicon-32x32.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'invarion', // Usually your GitHub org/user name.
  projectName: 'invarion-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        maxHits: '8',
        highlightResult: true,
      },
    ],
  ],
  customFields: {
    gettingStartedLinks: [
      {
        to: '/accounts-setup/desktop-applications/install-and-use-the-invarion-launcher',
        text: 'Install the Invarion Launcher',
      },
      {
        to: '/rapidplan-online/the-invarion-cloud/invarion-cloud-layout',
        text: 'Using the Invarion Cloud',
      },
      {
        to: '/rapidplan-online/rapidplan-online-workspace',
        text: 'The RapidPlan Online Workspace',
      },
      {
        to: '/rapidplan/basemaps-and-spatial-data/integrated-maps/integrated-map-providers',
        text: 'Integrated map providers',
      },
    ],
    faqsLinks: [
      {
        to: 'https://invarion.com/intl/products/rapidplan/',
        text: 'RapidPlan',
      },
      {
        to: 'https://invarion.com/intl/products/rapidpath/',
        text: 'RapidPath',
      },
      {
        to: 'https://invarion.com/intl/products/rapidplan-online/',
        text: 'RapidPlan Online',
      },
    ],
    docsLinks: [
      {
        to: '/rapidplan/Welcome',
        text: 'RapidPlan',
      },
      {
        to: '/rapidplan-online/Welcome',
        text: 'RapidPlan Online',
      },
      {
        to: '/rapidpath/Welcome',
        text: 'RapidPath',
      },
      { to: '/rapidpath-online/Welcome', text: 'RapidPath Online' },
    ],
    accountManagementLinks: [
      {
        to: '/accounts-setup/account-management/manage-licenses-and-add-ons',
        text: 'Managing Licenses and Add-ons',
      },
      {
        to: '/accounts-setup/account-management/manage-company-accounts',
        text: 'Managing Users',
      },
      {
        to: '/accounts-setup/account-management/buy-a-subscription',
        text: 'Purchasing New Licenses',
      },
      {
        to: '/accounts-setup/account-management/update-your-billing-information',
        text: 'Updating Your Billing Information',
      },
    ],
    whatsNewLinks: [
      {
        to: '/rapidplan/release-notes/official',
        text: 'Release Notes - RapidPlan',
      },
      {
        to: '/rapidplan-online/release-notes/',
        text: 'Release Notes - RapidPlan Online',
      },
      {
        to: '/rapidpath/release-notes/official',
        text: 'Release Notes - RapidPath',
      },
      {
        to: '/rapidpath-online/release-notes/',
        text: 'Release Notes - RapidPath Online',
      },
    ],
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      respectPrefersColorScheme: true,

      metadata: [
        {
          name: 'keywords',
          content: "rapid online, rapid plan cloud, rapidplan, rapid path online, documentation, what's new",
        },
      ],
      navbar: {
        title: 'Invarion Help Center',
        logo: {
          alt: 'Invarion logo',
          src: 'img/help-center-logo.png',
          srcDark: 'img/help-center-logo.png',
          href: '/',
          width: 32,
          height: 32,
        },
        items: [
          {
            position: 'left',
            label: 'RapidPlan',
            to: '/rapidplan/Welcome',
            activeBaseRegex: '^/rapidplan(?:/|$)',
            className: 'helpCenterSectionLink',
          },
          {
            position: 'left',
            label: 'RapidPath',
            to: '/rapidpath/Welcome',
            activeBaseRegex: '^/rapidpath(?:/|$)',
            className: 'helpCenterSectionLink',
          },
          {
            position: 'left',
            label: 'RapidPlan Online',
            to: '/rapidplan-online/Welcome',
            activeBaseRegex: '^/rapidplan-online(?:/|$)',
            className: 'helpCenterSectionLink',
          },
          {
            position: 'left',
            label: 'RapidPath Online',
            to: '/rapidpath-online/Welcome',
            activeBaseRegex: '^/rapidpath-online(?:/|$)',
            className: 'helpCenterSectionLink',
          },
          {
            position: 'left',
            label: 'Accounts & Setup',
            to: '/accounts-setup/Welcome',
            activeBaseRegex: '^/accounts-setup(?:/|$)',
            className: 'helpCenterSectionLink',
          },
          {
            position: 'right',
            label: 'Support',
            to: 'https://invarion.com/support/',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Company',
            items: [
              {
                html: '<a class="footer__link-item" href="https://invarion.com/" target="_self" rel="noopener noreferrer">Home (invarion.com)</a>',
              },
              {
                label: 'About Us',
                href: 'https://invarion.com/about/',
                target: '_self',
              },
              {
                label: 'Our History',
                href: 'https://invarion.com/history/',
                target: '_self',
              },
              {
                label: 'Our Guarantee',
                href: 'https://invarion.com/guarantee/',
                target: '_self',
              },
              {
                label: 'Blog',
                href: 'https://blog.invarion.com/',
                target: '_self',
              },
            ],
          },
          {
            title: 'Products',
            items: [
              {
                label: 'RapidPlan',
                href: 'https://invarion.com/products/rapidplan/',
                target: '_self',
              },
              {
                label: 'RapidPlan Online',
                href: 'https://invarion.com/products/rapidplanonline/',
                target: '_self',
              },
              {
                label: 'RapidPath',
                href: 'https://invarion.com/products/rapidpath/',
                target: '_self',
              },
              {
                label: 'RapidPath Online',
                href: 'https://invarion.com/products/rapidpathonline/',
                target: '_self',
              },
            ],
          },
          {
            title: 'Account',
            items: [
              {
                label: 'Invarion Cloud',
                href: 'https://cloud.invarion.com/',
                target: '_self',
              },
              {
                label: 'My Account',
                href: 'https://accounts.invarion.com/manage/my-account',
                target: '_self',
              },
              {
                label: 'Manage Company',
                href: 'https://accounts.invarion.com/manage/my-company',
                target: '_self',
              },
              {
                label: 'Manage Licenses',
                href: 'https://accounts.invarion.com/manage/license',
                target: '_self',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Technical Support',
                href: 'https://invarion.com/support/',
                target: '_self',
              },
              {
                label: 'FAQs',
                href: 'https://invarion.com/faqs/',
                target: '_self',
              },
              {
                label: 'Video Tutorials',
                href: 'https://www.youtube.com/user/invarionsupport',
                target: '_self',
              },
              {
                label: 'Download',
                href: 'https://invarion.com/install/',
                target: '_self',
              },
              {
                label: 'Contact',
                href: 'https://invarion.com/contact/',
                target: '_self',
              },
            ],
          },
        ],

        copyright: `Copyright © ${new Date().getFullYear()} Invarion, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
