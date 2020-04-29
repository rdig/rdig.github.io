import { graphql } from 'gatsby';

/**
 * This file is still needed since it's the entry point for Gatbsy
*/
export { default } from './Index';

export const pageQuery = graphql`
  query AllPosts {
    allMdx(sort: {fields: fields___date, order: DESC}) {
      edges {
        node {
          id
          fields {
            slug
            date
            title
          }
          excerpt
        }
      }
    }
  }
`;
