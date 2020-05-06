/**
 * Separate the graphql import from the rest of the 'gatsby' imports
 * Otherwise you'll run into the dreadded:
 * `ReferenceError: gatsby_1 is not defined`
 */
import { graphql } from 'gatsby';
import { useStaticQuery } from 'gatsby';

export const fetchSiteTitle = () => useStaticQuery(graphql`
  query SiteTitle {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`);
