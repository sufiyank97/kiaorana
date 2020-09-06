import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Img from "gatsby-image"

import { Container, Row, Col, Card } from "react-bootstrap"


const IndexPage = (props, { data }) => {
  
  return (
    <Layout>
      <SEO title="What To Do In The Cook Islands" />
      <h1 className="text-center">What To Do In The Cook Islands</h1>



      <Container>
        <Row>
          {
            props.data.allStrapiPodcast.nodes.map(node => (
              <Col lg={4} md={6} xs={12} key={node.id}>

                <Card className="mb-4">
                  <Link to={node.slug} className="card-link">
                    <Img
                      fluid={node.image.childImageSharp.fluid}
                      alt={node.name + " Cover"}
                      className="card-img-top"
                      fadeIn
                    />
                  </Link>
                  <Card.Body>
                    {node.location ?
                      (
                        <h3>{node.location}</h3>
                      ) :
                      <Fragment />
                    }

                    <h2><Link to={node.slug} className="card-link">{node.name}</Link></h2>

                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "header-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 50) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    podcastImage: file(relativePath: { eq: "podcast-cover-image-01-smaller.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 60) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    photoOfHaydnChantal: file(relativePath: { eq: "chantal-and-haydn-circle.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 60) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    latestEpisodes: allMarkdownRemark(
      sort: {fields: frontmatter___episode, order: DESC}, 
      filter: {frontmatter: {categorySlug: {eq: "what-to-do/"}}
      }) {
      edges {
        node {
          id

          fields {
            slug
          }
          frontmatter {
            title
            episode
            category
            categorySlug
            recap
            locatedIn
            Image01 {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 300, cropFocus: CENTER) {
                  base64
                tracedSVG
                aspectRatio
                srcWebp
                srcSetWebp
                originalName
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    allStrapiPodcast(filter: {category: {name: {eq: "what-to-do"}}}) {
      nodes {
        id
        strapiId
        slug
        email
        audioUrl
        description
        location
        name
        phone
        text
        website
        social {
          link
          image {
            childImageSharp {
              fixed(width: 30) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 300, cropFocus: CENTER) {
              base64
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;