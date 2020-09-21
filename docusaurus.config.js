module.exports = {
  title: 'Beebee',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Pitech', // Usually your GitHub org/user name.
  projectName: 'cqa-website', // Usually your repo name.
  themeConfig: {
    colorMode:{
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Beebee',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: 'blog', label: 'Giới thiệu', position: 'left'},

        {
          type: 'docsVersionDropdown',
          position: 'left',
        },

        {
          href: 'https://github.com/',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/',
        //     },
        //     {
        //       label: 'Second Doc',
        //       to: 'docs/doc2/',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: 'blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pitech Inc, Beebee by BOT`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
            postsPerPage: 3,
            feedOptions: {
              type: "all",
              copyright: `Copyright © ${new Date().getFullYear()} Dver.`
            }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
