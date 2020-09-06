import React,{Fragment} from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Img from "gatsby-image"

import { Container, Row, Col, Image, Card, Form } from "react-bootstrap"

import spotifyBadge from "../images/spotify-badge.svg"
import appleBadge from "../images/apple-badge.svg"
import BackgroundImage from 'gatsby-background-image'

const IndexPage = (props, {data}) => {
  console.log(props)
  return (
  <Layout>
    <SEO title="What You'll Find and What You Won't in the Cook Islands" />
    <BackgroundImage
          Tag="section"
          className="masthead fixed"
          fluid={props.data.indexImage.childImageSharp.fluid}
          fadeIn
        >
          <div className="black-overlay">
            <div className="content-box">
             <Container>
                <h1>A Podcast on What You'll Find and What You Won't in the Cook Islands</h1>
                {/* <h1>A Podcast and directory on What You'll Find and What You Won't in the Cook Islands</h1> */}
                <Row className="mt-2 mb-4">
                  <Col>
                  
                    <a  href="https://open.spotify.com/show/0UsiLf9WRGMTwPjtxCofx8?si=dyHE43VyQ1GTRa_BE_Lm2Q">
                      <Image src={spotifyBadge} className="spotify-badge m-1" fluid alt="Spotify Badge" />
                    </a>
                    <a href="https://podcasts.apple.com/us/podcast/the-kia-orana-podcast/id1515509524">
                      <Image src={appleBadge} className="m-3" fluid alt="Apple Badge" />
                    </a>
                  </Col>
                </Row>
                </Container>
                <Container className="text-center">
                    <h2><small>With your hosts,</small><br /> Haydn Adams & Chantal Napa</h2>
                    <p className="text-center"><Img 
                  fluid={props.data.photoOfHaydnChantal.childImageSharp.fluid}
                  alt="Haydn And Chantal"
                  fadeIn
                  className="indexCircleImage mx-auto d-block"
                /></p>
                    
                
             </Container>
            </div>
          </div>          
        </BackgroundImage>
        <Container>

          
          
          <h3 className="text-center">Recent Episodes</h3>
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
            <hr />
        </Container>
        
        <Container className="graidentBG pb-1 pt-2">
          <h2 className="white text-center">Sign Up for The Kia Orana Podcast Updates</h2>
          
          <script src="https://f.convertkit.com/ckjs/ck.5.js" />
          <Form action="https://app.convertkit.com/forms/1589256/subscriptions" method="post" data-sv-form="1589256" data-uid="3afd74d436" data-format="modal" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://kiaoranapodcast.com;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800">
                                        <div data-style="clean">
                                            <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert">
                                            </ul>
                                            <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields">
                                              <Row>
                                                <Col lg={5}>
                                                <Form.Group>
                                                            <Form.Control size="lg" name="email_address" placeholder="Your email address" required="" type="email"   />
                                                        </Form.Group>
                                                </Col>
                                                <Col lg={4}>
                                                <Form.Group>
                                                            <Form.Control size="lg" className="formkit-input" aria-label="Your first name" name="fields[first_name]" placeholder="Your first name" type="text"   />
                                                        </Form.Group>
                                                </Col>
                                                <Col lg={3}>
                                                <button data-element="submit" className="btn btn-primary btn-block" ><div class="formkit-spinner"><div></div><div></div><div></div></div><span>Sign me up!</span></button>
                                                </Col>
                                              </Row>
                                                        
                                                        
                                                     
                                            </div>
                                        </div>
                                        </Form>
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
    latestEpisodes: allMarkdownRemark(sort: {fields: frontmatter___episode, order: DESC}, limit: 6) {
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


    allStrapiPodcast(limit: 6, sort: {fields: name, order: ASC}) {
    nodes {
      name
      slug
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