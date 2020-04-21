module.exports = {
  siteMetadata: {
    title: `Gatsby`,
    description: `Powered by Gatsby`,
    author: `Raul Glogovetan`,
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
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
              sizeByPixelDensity: true,
            },
          },
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
        codegenDelay: 250,
        // alwaysCheck: false,
      }
    },
    // {
    //   resolve: `gatsby-plugin-graphql-codegen`,
    //   options: {
    //     fileName: `./types/gatsby-graphql.ts`,
    //     documentPaths: [
    //       './src/**/*.{ts,tsx}',
    //       './node_modules/gatsby-*/**/*.js',
    //       './.gatsby/gatsby-node.ts',
    //     ],
    //   }
    // }
  ],
}
