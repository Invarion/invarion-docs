// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Help Center',
  // tagline: "Dinosaurs are meh",
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
          // sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        to: '/category/rapid-plan',
        text: 'RapidPlan',
      },
      {
        to: '/category/rapid-online',
        text: 'RapidPath',
      },
      {
        to: '/category/rapid-path',
        text: 'RapidPlan Online',
      },
      {
        to: 'https://invarion.com/intl/products/rapidpath-online/',
        text: 'RapidPath Online',
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
      // {
      //   to: "https://invarion.com/intl/products/rapidpath-online/",
      //   text: "RapidPath Online",
      // },
    ],
    popularDocsLinks: [
      { to: '/category/rapid-plan', text: 'Setting up your Team' },
      { to: '/category/rapid-online', text: 'Using plugins' },

      { to: '/category/rapid-online', text: 'Set up your thing ' },
      { to: '/category/rapid-online', text: 'Getting Started with Invarion' },

      { to: '/category/rapid-path', text: 'Billing FAQ' },
      { to: '/category/rapid-path', text: 'Keyboard Shortcuts' },
      { to: '/category/rapid-path', text: 'Frequently Asked Questions' },
    ],
    changelogsLinks: [
      {
        to: '/rapid-online/release-updates',
        text: 'RapidPlan & RapidPath',
      },
      // {
      //   to: "/rapid-online/release-updates",
      //   text: "RapidPath",
      // },
      {
        to: '/rapid-online/release-updates',
        text: 'RapidPlan Online',
      },
      // {
      //   to: "rapid-online/release-updates",
      //   text: "RapidPath Online",
      // },
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
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Invarion Help Center',
          },
          {
            position: 'left',
            label: 'Home',
            to: '/',
          },
          {
            position: 'right',
            label: 'Get in touch',
            to: 'https://invarion.com/contact/',
          },
          {
            position: 'right',
            label: 'Technical Support',
            to: 'https://invarion.com/support/ ',
          },
          {
            position: 'right',
            label: 'Pricing and Purchasing',
            to: 'https://invarion.com/pricing/',
          },
        ],
      },
      footer: {
        // style: "light",
        links: [
          {
            title: 'Company',
            items: [
              {
                label: 'About Us',
                to: 'https://invarion.com/about/',
              },
              {
                label: 'Our History',
                to: 'https://invarion.com/history/',
              },
              {
                label: 'Our Guarantee',
                to: 'https://invarion.com/guarantee/',
              },
              {
                label: 'Blog',
                href: 'https://invarion.com/blog/',
              },
            ],
          },
          {
            title: 'Products',
            items: [
              {
                label: 'RapidPlan',
                href: 'https://invarion.com/products/rapidplan/',
              },
              {
                label: 'RapidPlan Online',
                href: 'https://invarion.com/products/rapidplan-online/',
              },
              {
                label: 'RapidPath',
                href: 'https://invarion.com/products/rapidpath/',
              },
              {
                label: 'RapidPath Online',
                href: 'https://invarion.com/products/rapidpath-online/',
              },
            ],
          },
          {
            title: 'Account',
            items: [
              {
                label: 'Invarin Cloud',
                href: 'https://cloud.invarion.com/',
              },
              {
                label: 'My Account',
                href: 'https://accounts.invarion.com/manage/my-account',
              },
              {
                label: 'Manage Company',
                href: 'https://accounts.invarion.com/manage/my-company',
              },
              {
                label: 'Manage Licenses',
                href: 'https://accounts.invarion.com/manage/license',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Technical Support',
                href: 'https://invarion.com/support/',
              },
              {
                label: 'FAQs',
                href: 'https://invarion.com/faqs/',
              },
              {
                label: 'Video Tutorials',
                href: 'https://www.youtube.com/user/invarionsupport',
              },
              {
                label: 'Download',
                href: 'https://invarion.com/install/',
              },
              {
                label: 'Contact',
                href: 'https://invarion.com/contact/',
              },
            ],
          },
        ],
        // logo: {
        //   alt: "Invarion logo",
        //   src: "img/logo.svg",
        //   srcDark: "img/logo-dark.svg",
        //   width: 100,
        // },
        copyright: `Copyright © ${new Date().getFullYear()} Invarion, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
