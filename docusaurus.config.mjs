import blink from './src/blink/index.js';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Red Team Guide',
  tagline: 'A reference for red team operations',
  url: 'https://redteam.guide',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'redteam.guide',
  projectName: 'redteamguide',
  trailingSlash: true,

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  themes: [
    '@docusaurus/theme-mermaid',
    ['@easyops-cn/docusaurus-search-local', {
      hashed: true,
      indexBlog: true,
      docsRouteBasePath: '/docs',
      highlightSearchTermsOnTargetPage: true,
    }],
  ],

  staticDirectories: ['static'],

  themeConfig: {
    metadata: [
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'Red Team Guide'},
      {name: 'twitter:description', content: 'Guides, templates, and tradecraft for red team operations by Joe Vest and James Tubberville'},
      {name: 'twitter:image', content: 'https://redteam.guide/img/og-image.png'},
      {property: 'og:type', content: 'website'},
      {property: 'og:image', content: 'https://redteam.guide/img/og-image.png'},
      {property: 'og:description', content: 'Guides, templates, and tradecraft for red team operations by Joe Vest and James Tubberville'},
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
          label: 'Guides',
        },
        {
          type: 'doc',
          docId: 'definitions',
          position: 'left',
          label: 'Definitions',
        },
        {
          type: 'doc',
          docId: 'about_the_authors',
          position: 'left',
          label: 'Authors',
        },
        {
          type: 'doc',
          docId: 'about_the_book',
          position: 'left',
          label: 'Book',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
      ],
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: blink,
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
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/threatexpress',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              to: '/privacy',
            },
            {
              label: 'Disclaimer',
              to: '/disclaimer',
            },
          ],
        },
      ],
      copyright: `Copyright \u00A9 ${new Date().getFullYear()} RedTeam.Guide`,
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
  },

  headTags: [
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Red Team Guide',
        url: 'https://redteam.guide',
        description: 'A reference for red team operations',
        author: [
          {
            '@type': 'Person',
            name: 'Joe Vest',
            jobTitle: 'Principal Security Engineer',
            worksFor: {'@type': 'Organization', name: 'Amazon'},
            description: 'Author of Red Team Development and Operations, creator of the original SANS SEC564 course, 20+ years in offensive security.',
            sameAs: [
              'https://twitter.com/joevest',
              'https://www.linkedin.com/in/joe-vest',
            ],
          },
          {
            '@type': 'Person',
            name: 'James Tubberville',
            description: 'Co-author of Red Team Development and Operations, co-creator of the original SANS SEC564 course, 22+ years in cybersecurity including red team leadership and CISO roles.',
            sameAs: ['https://twitter.com/minis_io'],
          },
        ],
      }),
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Red Team Guide',
        url: 'https://redteam.guide',
        logo: 'https://redteam.guide/img/logo.png',
        sameAs: [
          'https://twitter.com/joevest',
          'https://github.com/threatexpress',
        ],
      }),
    },
  ],

  stylesheets: [
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap',
      type: 'text/css',
    },
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Threat Profiles directory renamed from "Threat Profiles" to "threat-profiles"
          {from: '/docs/Threat Profiles/autobank', to: '/docs/threat-profiles/autobank'},
          {from: '/docs/Threat Profiles/blueheart', to: '/docs/threat-profiles/blueheart'},
          {from: '/docs/Threat Profiles/cybersnake', to: '/docs/threat-profiles/cybersnake'},
          {from: '/docs/Threat Profiles/simplesam', to: '/docs/threat-profiles/simplesam'},
          {from: '/docs/category/threat-profiles-1', to: '/docs/category/threat-profiles'},
          // Typo fix: mindset-challege -> mindset-challenge
          {from: '/docs/Exercises/mindset-challege', to: '/docs/Exercises/mindset-challenge'},
        ],
      },
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          path: './blog',
          routeBasePath: 'blog',
          blogDescription: 'Red team tradecraft, tool reviews, and operational insights from Joe Vest and James Tubberville.',
          showReadingTime: true,
          blogSidebarTitle: 'Recent Posts',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: ['rss', 'atom'],
            title: 'Red Team Guide Blog',
          },
        },
        gtag: {
          trackingID: 'G-S9YDP7R6HD',
          anonymizeIP: true,
        },
        sitemap: {
          lastmod: 'date',
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.map((item) => {
              if (item.url.match(/redteam\.guide\/$/)) {
                return {...item, changefreq: 'weekly', priority: 1.0};
              }
              if (item.url.includes('/docs/Concepts/') || item.url.includes('/docs/checklists/') || item.url.includes('/docs/definitions')) {
                return {...item, changefreq: 'monthly', priority: 0.8};
              }
              if (item.url.includes('/docs/')) {
                return {...item, changefreq: 'monthly', priority: 0.7};
              }
              if (item.url.includes('/blog/') && !item.url.includes('/tags/') && !item.url.includes('/archive/')) {
                return {...item, changefreq: 'monthly', priority: 0.6};
              }
              if (item.url.includes('/tags/') || item.url.includes('/category/') || item.url.includes('/archive/')) {
                return {...item, changefreq: 'monthly', priority: 0.3};
              }
              return {...item, changefreq: 'monthly', priority: 0.5};
            });
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
};

export default config;
