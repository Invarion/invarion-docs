// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Welcome to the Invarion Help Centre',
  // tagline: "Dinosaurs are meh",
  url: 'https://invarion.github.io/',
  baseUrl: '/invarion-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
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
            label: 'Invarion Help Centre',
          },
          {
            position: 'left',
            label: 'Home',
            to: '/',
          },
          {
            position: 'right',
            label: 'Get in touch',
            to: 'https://invarion.com/eu/contact/',
          },
          {
            position: 'right',
            label: 'Technical Support',
            to: '/',
          },
          {
            position: 'right',
            label: 'Pricing and Purchasing',
            to: 'https://invarion.com/eu/pricing/',
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
                to: 'https://invarion.com/eu/about/',
              },
              {
                label: 'Our History',
                to: 'https://invarion.com/eu/history/',
              },
              {
                label: 'Our Guarantee',
                to: 'https://invarion.com/eu/guarantee/',
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
                href: 'https://invarion.com/eu/products/rapidplan/',
              },
              {
                label: 'RapidPlan Online',
                href: 'https://invarion.com/eu/products/rapidplan-online/',
              },
              {
                label: 'RapidPath',
                href: 'https://invarion.com/eu/products/rapidpath/',
              },
              {
                label: 'RapidPath Online',
                href: 'https://invarion.com/eu/products/rapidpath-online/',
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
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Manage Company',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Manage Licenses',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Technical Support',
                href: 'https://invarion.com/blog/',
              },
              {
                label: 'FAQs',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Video Tutorials',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Download',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Contact',
                href: 'https://invarion.com/eu/contact/',
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
