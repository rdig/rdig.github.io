export default ({ site: { siteMetadata: { siteUrl } }, allSitePage }) =>
  allSitePage.edges.map(({ node: { path } }) => {
    /**
     * @NOTE This could be done more elegantly, but it'll do for a first try
     */
    if (path === '/') {
      return {
        url: `${siteUrl}${path}`,
        changefreq: `daily`,
        priority: 0.9,
      }
    }
    return {
      url: `${siteUrl}${path}`,
      changefreq: `monthly`,
      priority: 0.7,
    }
  });
