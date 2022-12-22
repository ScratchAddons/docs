// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Scratch Addons Docs",
  tagline: "All-in-one browser extension for Scratch",
  url: "https://docs.scratchaddons.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "scratchaddons", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/scratchaddons/docs/tree/main/",
        },

        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/scratchaddons/docs/tree/main/",
          feedOptions: {
            type: "all",
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Scratch Addons Docs",
        logo: {
          alt: "Scratch Addons Logo",
          src: "img/icon.svg",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Docs",
          },
          {
            type: "doc",
            docsPluginId: "develop",
            docId: "index",
            position: "left",
            label: "Developing",
          },

          { to: "/blog", label: "Blog", position: "left" },
          {
            to: "https://scratchaddons.com",
            label: "Main Site",
            position: "left",
          },

          {
            href: "https://github.com/scratchaddons/scratchaddons",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Home",
                to: "/docs/index",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/scratchaddons/scratchaddons",
              },
            ],
          },
        ],
        copyright: `© 2022 Scratch Addons contributors

        Scratch Addons is not affiliated, associated, or in any way officially connected with the Scratch website or the organizations that maintain it.
        
        Scratch Addons is licensed under the terms of GNU General Public License v3.0.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "develop",
        path: "develop",
        routeBasePath: "develop",
        sidebarPath: require.resolve("./sidebarsDevelop.js"),
        // ... other options
      },
    ],
  ],
};

module.exports = config;
