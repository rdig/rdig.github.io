import { graphql } from 'gatsby';

export { default } from './Post';

/**
 * Query needs to be placed in the index, since this is where Gatsby is expecting
 * to extract it from
 */
export const postQuery = graphql`
  query SinglePost($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        slug
        date
      }
    }
  }
`
