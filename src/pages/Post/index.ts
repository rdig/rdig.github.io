import { graphql } from 'gatsby';

/**
 * This whole unpleasentness is needed since gatsby doesn't support
 * export { default } from ...
*/
import Post from './Post';
export default Post;

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
