import React from "react"
import Layout from "../../components/layout"
import { Link, graphql } from "gatsby"

import { Container, Row, Card, Col } from 'react-bootstrap';
import Img from "gatsby-image"
import SEO from "../../components/seo"

// import { Image } from "react-bootstrap";


export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Explore The Cook Islands" />
      <Container>
        <h1 className="text-center">Explore The Cook Islands</h1>
        <Row>


          <Col lg={4}>
            <Card>
              <Img
                fluid={data.whereToStayImage.childImageSharp.fluid}
                alt="Where To Stay"
                fadeIn
                class="card-img-top"
              />
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <h2 className="text-center">
                  <Link
                    to="/explore/where-to-stay/"
                    activeClassName="active"
                    className="card-link"
                  >Where To Stay</Link>
                </h2>
                <Card.Text>
                  Find the best place to stay for your family or retreat.
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Img
                fluid={data.whatToDoImage.childImageSharp.fluid}
                alt="Where To Stay"
                fadeIn
                class="card-img-top"
              />
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <h2 className="text-center"><Link
                  to="/explore/what-to-do/"
                  activeClassName="active"
                  className="card-link"
                >What To Do</Link></h2>

                <p>
                  Explore the island. Listen to the locals on what there is to do on the island.
                  </p>
                {/* <p className="text-center">
                  <Button variant="primary">Explore What To Do</Button></p> */}
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Img
                fluid={data.specialGuests.childImageSharp.fluid}
                alt="Special Guests"
                fadeIn
                class="card-img-top"
              />
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <h2 className="text-center"><Link
                  to="/explore/special-guests/"
                  activeClassName="active"
                  className="card-link"
                >Special Guests</Link></h2>
                <p>
                  Listen to the locals tell you more about the island. From newspaper editors to the brand of the Cook Islands.
                  </p>
                {/* <p className="text-center">
                  <Button variant="primary">Explore What To Do</Button></p> */}
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Img
                fluid={data.wheretoShop.childImageSharp.fluid}
                alt="Where To Shop"
                fadeIn
                class="card-img-top"
              />
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <h2 className="text-center"><Link
                  to="/explore/where-to-shop/"
                  activeClassName="active"
                  className="card-link"
                >Where To Shop</Link></h2>
                <p>
                  Where to shop for groceries and supplies in the Cook Islands.
                  </p>
                {/* <p className="text-center">
                  <Button variant="primary">Explore What To Do</Button></p> */}
              </Card.Body>
            </Card>
          </Col>
          {/* <div>
            <ul>
              {data.allMarkdownRemark.edges.map(({ node }) => (
              <li key={node.id}>{node.frontmatter.title}</li>
              ))}
              </ul>
            </div> */}
        </Row>
      </Container>
    </Layout>
  )
}
export const query = graphql`
  query {
    whereToStayImage: file(relativePath: { eq: "explore/where-to-stay.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900, maxHeight: 450, cropFocus: CENTER, fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    whatToDoImage: file(relativePath: { eq: "explore/palace-of-pa-ariki.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900, maxHeight: 450, cropFocus: CENTER, fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    specialGuests: file(relativePath: { eq: "explore/special-guests.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900, maxHeight: 450, cropFocus: CENTER, fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    wheretoShop: file(relativePath: { eq: "explore/prime-foods.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900, maxHeight: 450, cropFocus: CENTER, fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            Image01 {
              childImageSharp {
                fluid(maxWidth: 896) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            category
            slugOfAudio
          }
        }
      }
    }
    
  }
`

// allBuzzsproutPodcastEpisode {
//   edges {
//     node {
//       slug
//     }
//   }
// }