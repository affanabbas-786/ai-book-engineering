// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Book Engineering',
  tagline: 'Spec-Driven Writing + RAG Chatbot Integration',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Simple domain only (no sub-path here)
  url: 'https://affanabbas-786.github.io',   // sirf domain

  // For local dev, keep root
  baseUrl: '/',

  organizationName: 'affanabbas-786',
  projectName: 'ai-book-engineering',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // editUrl hattado, null nahi chalega
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
    navbar: {
      title: 'AI Book Engineering',
      logo: {
        alt: 'AI Book Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Book',
        },
        {
          to: '/chat',
          label: 'Chatbot',
          position: 'left',
        },
        {
          href: 'https://github.com/affanabbas-786/ai-book-engineering',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Start Reading',
              to: '/docs/chapter-1-introduction',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/affanabbas-786/ai-book-engineering',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Affan Abbas. Built for GIAIC Hackathon.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
