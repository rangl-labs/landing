// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RangL',
  tagline: 'A competition platform to accelerate progress in data-driven control problems',
  url: 'https://rangl.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/rangl-logo.png',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  plugins: ['@docusaurus/plugin-ideal-image'],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // Please change this to your repo.
          editUrl: 'https://github.com/rangl-labs/landing',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/rangl-labs/landing',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'RangL',
        logo: {
          alt: 'RangL Logo',
          src: 'img/rangl-logo.png',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Docs',
          // },
          { to: 'https://www.turing.ac.uk/research/research-projects/ai-control-problems', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/rangl-labs/landing',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Welcome',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   // {
        //   //   title: 'Community',
        //   //   items: [
        //   //     {
        //   //       label: 'Stack Overflow',
        //   //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //   //     },
        //   //     {
        //   //       label: 'Discord',
        //   //       href: 'https://discordapp.com/invite/docusaurus',
        //   //     },
        //   //     {
        //   //       label: 'Twitter',
        //   //       href: 'https://twitter.com/docusaurus',
        //   //     },
        //   //   ],
        //   // },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/rangl-labs',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} RangL.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
