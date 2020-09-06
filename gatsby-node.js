const path = require(`path`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
      query {
        allStrapiPodcast {
          edges{
            node{
              slug
            }
          }
        }
      }
    `)
  result.data.allStrapiPodcast.edges.forEach(({node}) => {
    createPage({
      path: node.slug,
      component: path.resolve(`src/templates/explore-individual.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })
}