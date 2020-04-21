import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

interface Props {
  data: any;
};

export default function PageTemplate({ data }: Props) {
  return (
    <div>
      <h1>{data.mdx.frontmatter.title}</h1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
