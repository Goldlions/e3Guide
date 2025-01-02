// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'E3 Guide',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  // themes: ['@docusaurus/theme-search-algolia'],

  // Set the production url of your site here
  url: 'https://goldlions.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/e3Guide/',
  deploymentBranch: 'master',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Goldlions', // Usually your GitHub org/user name.
  projectName: 'e3Guide', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // 删除这个以移除"编辑页面"
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],

  ],



  plugins: [
    'plugin-image-zoom',

    async function tailwindPlugin(context, options) {
      return {
        name: 'tailwind-plugin',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins = [
            // require('postcss-import'),
            require('tailwindcss/nesting'),
            require('tailwindcss'),
            require('autoprefixer'),
          ];
          return postcssOptions;
        },
      };
    }

  ],



  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          hideable: true, // 可隐藏侧边栏
          autoCollapseCategories: true, // 自动折叠侧边栏类别
        },
      },
      // 导航栏
      navbar: {
        title: 'E3 Guide',
        hideOnScroll: true, // 启用滚动时隐藏导航栏
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guide',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.goldlion.com/',
            label: 'Goldlion',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            queryString: '?persistLocale=true'
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // imageZoom: {
        // CSS selector to apply the plugin to, defaults to '.markdown img'
        // selector: '.markdown :not(em) > img',
        // config: {
        //   margin:0,
        //   background: {
        //     light: 'rgb(255, 255, 255)',
        //     dark: 'rgb(50, 50, 50)'
        //   }
        // }
      // },
      // algolia: {
      //   // Algolia 提供的应用 ID
      //   appId: 'YOUR_APP_ID',
      //
      //   //  公开 API 密钥：提交它没有危险
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //
      //   indexName: 'YOUR_INDEX_NAME',
      //
      //   // 可选：见下文
      //   contextualSearch: true,
      //
      //   // 可选：声明哪些域名需要用 window.location 型的导航而不是 history.push。 适用于 Algolia 配置会爬取多个文档站点，而我们想要用 window.location.href 在它们之间跳转时。
      //   externalUrlRegex: 'external\\.com|domain\\.com',
      //
      //   // 可选：替换 Algolia 的部分网址。 在使用相同搜索索引支持多个不同 baseUrl 的部署时非常有用。 你可以在 “from” 中使用正则表达式或字符串。 比方说，localhost:3000 和 myCompany.com/docs
      //   replaceSearchResultPathname: {
      //     from: '/docs/', // or as RegExp:fv  /\/docs\//
      //     to: '/',
      //   },
      //
      //   // 可选：Algolia 搜索参数
      //   searchParameters: {},
      //
      //   // 可选：默认启用的搜索页路径（传递 `false` 以禁用它）
      //   searchPagePath: 'search',
      //
      //   // 可选：Docsearch 的 insights 功能是否启用（默认为 `false`）
      //   insights: true,
      //
      //   //... 其他 Algolia 参数
      // },
    }),
};

export default config;
