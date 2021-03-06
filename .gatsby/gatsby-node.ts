import path from 'path';
import { createFilePath } from 'gatsby-source-filesystem';
import mdExtractor from 'markdown-extractor';

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    const parent = getNode(node.parent);
    /**
     * This could have been done w/o using yet-another-npm-package but in
     * the interest of time, it will do for now
     */
    const [{ data: firstHeadingTitle }] = mdExtractor.heading(node.rawBody);
    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: node.frontmatter.path || value,
    });
    createNodeField({
      name: "date",
      node,
      value: node.frontmatter.date || parent.birthtime,
    });
    createNodeField({
      name: "title",
      node,
      value: node.frontmatter.title || firstHeadingTitle,
    });
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions

  const result = await graphql(`
    query AllMdx {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges

  // you'll call `createPage` for each result
  posts.forEach(({ node }) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      // path: node.frontmatter.path || node.fields.slug,
      path: node.fields.slug,
      // path: 'everyhign'
      // This component will wrap our MDX content
      component: path.resolve(`./src/pages/Post/index.ts`),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}
