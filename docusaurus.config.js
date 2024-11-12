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
  plugins: [require.resolve('docusaurus-lunr-search')],
  customFields: {
    gettingStartedLinks: [
      {
        to: '/rapidplan/rapidplan/installation-preferences-and-adminstration/the-invarion-launcher',
        text: 'Downloading the Invarion Launcher',
      },
      {
        to: '/rapidplan-online/the-invarion-cloud/invarion-cloud-and-its-layout',
        text: 'Using the Invarion Cloud',
      },
      {
        to: '/rapidplan-online/rapidplan-online-workspace',
        text: 'The RapidPlan Online Workspace',
      },
      {
        to: '/rapidplan/integrated-mapping/accessing-integrated-mapping',
        text: 'Accessing Integrated Mapping',
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
        to: 'rapidplan/the-welcome-screen-and-starting-a-plan/the-welcome-screen',
        text: 'RP',
      },
      {
        to: '/rapidplan-online/getting-started',
        text: 'RO',
      },
      {
        to: '/rapidpath/the-welcome-screen-and-starting-a-plan/the-welcome-screen',
        text: 'RA',
      },
      { to: 'rapidpath-online/Welcome', text: 'RAO' },
    ],
    accountManagementLinks: [
      {
        to: '/account-management/managing-licenses',
        text: 'Managing Your Subscriptions',
      },
      {
        to: '/account-management/managing-company-accounts',
        text: 'Managing Users',
      },
      {
        to: '/account-management/buying-a-subscription',
        text: 'Purchasing New Licenses',
      },
      {
        to: '/account-management/updating-your-billing-information',
        text: 'Updating Your Billing Information',
      },
    ],
    whatsNewLinks: [
      {
        to: '/rapidplan/release-notes/release-notes-rapidplan',
        text: 'Release Notes - RapidPlan',
      },
      {
        to: '/rapidplan-online/release-notes/release-notes-rapidplan-online',
        text: 'Release Notes - RapidPlan Online',
      },
      {
        to: '/rapidpath/release-notes/release-notes-rapidpath',
        text: 'Release Notes - RapidPath',
      },
      {
        to: '/rapidpath-online/release-notes/release-notes-rapidpath-online',
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
          content:
            "rapid online, rapid plan cloud, rapidplan, rapid path online, documentation, what's new",
        },
      ],
      navbar: {
        logo: {
          alt: 'Invarion logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
          href: 'https://invarion.com/',
        },
        items: [
          {
            position: 'left',
            label: 'Help Center',
            to: '/',
            className: 'text-black',
          },
          {
            type: 'dropdown',
            label: 'Sections',
            position: 'left',
            items: [
              {
                type: 'doc',
                label: 'RapidPlan',
                docId: 'rapidplan/the-welcome-screen-and-starting-a-plan/the-welcome-screen',
              },
              {
                type: 'doc',
                label: 'RapidPath',
                docId:
                  'rapidpath/the-welcome-screen-and-starting-a-plan/the-welcome-screen',
              },
              {
                type: 'doc',
                label: 'RapidPlan Online',
                docId: 'rapidplan-online/getting-started/getting-started',
              },
              {
                type: 'doc',
                label: 'RapidPath Online',
                docId: 'rapidpath-online/Welcome',
              },
              {
                type: 'doc',
                label: 'Account Management',
                docId: 'account-management/accessing-your-account',
              },
            ],
          },
          {
            position: 'right',
            label: 'Book a demo',
            to: 'https://invarion.com/contact/',
          },
          {
            position: 'right',
            label: 'Contact Support',
            to: 'https://invarion.com/support/ ',
          },
          {
            position: 'right',
            label: 'Sign up',
            to: 'https://invarion.com/pricing/',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Company',
            items: [
              {
                label: 'About Us',
                to: 'https://invarion.com/about/',
                target: '_self',
              },
              {
                label: 'Our History',
                to: 'https://invarion.com/history/',
                target: '_self',
              },
              {
                label: 'Our Guarantee',
                to: 'https://invarion.com/guarantee/',
                target: '_self',
              },
              {
                label: 'Blog',
                href: 'https://invarion.com/blog/',
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
                href: 'https://invarion.com/products/rapidplan-online/',
                target: '_self',
              },
              {
                label: 'RapidPath',
                href: 'https://invarion.com/products/rapidpath/',
                target: '_self',
              },
              {
                label: 'RapidPath Online',
                href: 'https://invarion.com/products/rapidpath-online/',
                target: '_self',
              },
            ],
          },
          {
            title: 'Account',
            items: [
              {
                label: 'Invarin Cloud',
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
