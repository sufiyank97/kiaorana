import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

import { Container, Row, Col } from 'react-bootstrap';
// import Img from "gatsby-image"
import SEO from "../components/seo"
// import Img from "gatsby-image"

// import { Image } from "react-bootstrap";


export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Podcast Episodes" />
      <Container>
          <h1>Podcast Episodes</h1>
          <Row>

          {data.allBuzzsproutPodcastEpisode.edges.map(({ node }) => (
            <Col lg={4} xs={12} key={node.id}>
              <h2>{node.title}</h2>
              <Link to={node.slug} className="card-link">Listen</Link>
              <div>

              </div>
            </Col>
            ))}
          </Row>
        </Container>
    </Layout>
  )
}
export const query = graphql`
  query {
    allBuzzsproutPodcastEpisode {
      edges {
        node {
          total_plays
          title
          summary
          slug
          episode_number
        }
      }
    }
  }
`