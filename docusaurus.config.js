/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Red Team Development and Operations',
  tagline: 'A Practical Guide',
  url: 'https://redteam.guide',
  baseUrl: '/redteamguide/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'redteam.guide', // Usually your GitHub org/user name.
  projectName: 'redteamguide', // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-156693847-1',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    metadatas: [
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:title', content: 'Red Team Development and Operations'},
      {name: 'twitter:description', content: 'A practical guide - by Joe Vest and James Tubberville'},
      {name: 'twitter:image', content: 'https://redteam.guide/img/books.png'}
    ],
    navbar: {
      title: 'REDTEAM.GUIDE',
      logo: {
        alt: 'REDTEAM.GUIDE',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'guides',
          position: 'left',
          label: 'Red Teaming Guides',
        },
        {
          type: 'doc',
          docId: 'about_the_book',
          position: 'left',
          label: 'About the book',
        },
        {
          type: 'doc',
          docId: 'about_the_authors',
          position: 'left',
          label: 'About the Authors',
        },        {
          type: 'doc',
          docId: 'definitions',
          position: 'left',
          label: 'Red Teaming Definitions',
        },
        {
          href: 'https://github.com/threatexpress',
          className: 'github',
          position: 'right',
        },
        {
          href: 'https://threatexpress.com',
          label: 'Blog',
          position: 'right',
        },

      ],
    },
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: "  ",
        darkIconStyle: {
          marginTop: "1px",
        },
        lightIcon: "  ",
        lightIconStyle: {
          marginTop: "1px",
        },
      },
    },
    prism: {
      theme: require("./src/blink"),
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Red Team Guides',
              to: '/docs/guides',
            },
            {
              label: 'About the Book',
              to: '/docs/about_the_book',
            },
            {
              label: 'About the Authors',
              to: '/docs/about_the_authors',
            },
            {
              label: 'Red Teaming Definitions',
              to: '/docs/definitions',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter - Joe Vest',
              href: 'https://twitter.com/joevest',
            },
            {
              label: 'Twitter - James Tubberville',
              href: 'https://twitter.com/minis_io',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://threatexpress.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/threatexpress',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RedTeam.Guide`,
    },
  },
  plugins: [require.resolve("docusaurus-lunr-search")],
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
