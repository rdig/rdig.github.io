/**
 * This file is still needed since it's the entry point for Gatbsy
*/
import { graphql } from 'gatsby';

/**
 * This whole unpleasentness is needed since gatsby doesn't support
 * export { default } from ...
*/
import Index from './Index';
export default Index;

export const pageQuery = graphql`
  query AllPosts {
    allMdx(sort: {fields: fields___date, order: DESC}) {
      edges {
        node {
          id
          body
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
