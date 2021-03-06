import sitemapPriorities from './sitemap-priorities';

const gatsbyConfig = {
  siteMetadata: {
    title: `Raul Glogoveţan`,
    description: `Personal Website`,
    author: `Raul Glogoveţan`,
    siteUrl: `https://glogovetan.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `./src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-vscode'
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `./src/posts/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-ts`,
      options: {
        tsLoader: {
          logLevel: 'warn',
        },
        forkTsCheckerPlugin: {
          eslint: true,
        },
        fileName: `./types/graphqlTypes.d.ts`,
        codegen: true,
        codegenDelay: 200,
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@graphqlTypes': 'types/graphqlTypes.d.ts',
          '@components': 'src/components',
          '@styles': 'src/styles',
          '@utils': 'src/utils',
          '@constants': 'src/utils/constants.ts',
        },
        extensions: [
          'js',
          'jsx',
          'ts',
          'd.ts',
          'tsx',
          'css',
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [
          `/Index/`,
          `/Index/Index`,
          `/Post/`,
          `/Post/Post/`,
        ],
        serialize: sitemapPriorities,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
    },
  ],
};

export default gatsbyConfig;
