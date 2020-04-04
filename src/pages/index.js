import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMdx

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Title</h1>
      <p>Lorem Ipsum Paragraph</p>
      <ul>
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.fields.slug}>
              <h2>{post.frontmatter.title || post.headings[0].value}</h2>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
          headings(depth: h1) {
            value
          }
        }
      }
    }
  }
`


export default IndexPage
