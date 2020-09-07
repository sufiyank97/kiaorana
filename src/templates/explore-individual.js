import React,{Fragment} from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layoutNoPodcastHeader"
import Img from "gatsby-image"
import { Container, Row, Col, Card } from "react-bootstrap"
import SEO from "../components/seo"
import AudioPlayer from 'react-h5-audio-player';
import faceBook from "../images/facebook-icon.jpg"


export default (props) => {
  
  const podcast = { ...props.data.strapiPodcast }
  return (
    <Layout>
      <SEO title={podcast.name + " | " + podcast.category.name} /> 
      <Container className="text-center">
        <h1 className="mt-3 mb-3">{podcast.name}</h1>

        <AudioPlayer
          src={podcast.audioUrl}
          layout="horizontal-reverse"
          customAdditionalControls={[]}
          customVolumeControls={[]}
          className="singleCol centeredCol"
        />
      </Container>
      <hr />
      <Container>
          {
            podcast.image?(

            <div className="featured-thumbnail">
              <p><Img
                fluid={podcast.image.childImageSharp.fluid} fadeIn
              />
              </p>
            </div>
            ):<Fragment/>
          }
          
        <Row>
          <Col lg={4} md={5}>
            <Card className="mb-4">
              <Card.Body>
                {podcast.phone ?
                  (
                    <Card.Title><p><strong>Contact {podcast.name}</strong></p></Card.Title>
                  ) :
                  <div><Link to="/contact/">Contact the Kia Orana Podcast</Link> for more information about this podcast and business/guest.</div>
                }
                {/* <Card.Title><p><strong>Contact {explore.frontmatter.title}</strong></p></Card.Title> */}
                <Card.Text>
                  {podcast.phone ?
                    (
                      <div>
                        <p>Phone<br />
                          <strong>{podcast.phone}</strong>
                        </p>

                      </div>
                    ) :
                    null
                  }

                  {podcast.website ?
                    (
                      <div>
                        <p>Website<br />
                          <strong><a href={"https://" + podcast.website}>{podcast.website}</a></strong>
                        </p>

                      </div>
                    ) :
                    null
                  }

                  {podcast.text ?
                    (
                      <div>
                        <p>Text<br />
                          <strong>{podcast.text}</strong>
                        </p>

                      </div>
                    ) :
                    null
                  }

                  {podcast.text ?
                    (
                      <div>
                        <p>Email<br />
                          <strong><a href={"mailto:" + podcast.email}>{podcast.email}</a></strong>
                        </p>

                      </div>
                    ) :
                    null
                  }

                  {Array.isArray(podcast.social) ?
                    (
                      <div>
                        <p>On Social Media<br />
                        {
                          podcast.social.map((soc,i)=>(
                          <a href={soc.link} key={i} target="__blank">
                          <Img
                fixed={soc.image.childImageSharp.fixed} fadeIn
              />
                            </a>
                          ))
                        }
                          
                        </p>
                      </div>
                    ) :
                    null
                  }

                  {podcast.location ?
                    (
                      <div>
                        <p>Located in<br />
                          <strong>{podcast.location}</strong>
                        </p>
                      </div>
                    ) :
                    null
                  }



                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={8} md={7}>
            <div>
              {podcast.description ?
                (
                  <article>
                    {/* <div dangerouslySetInnerHTML={{ __html: explore.html }} /> */}
                    <div>
                      {podcast.description.split('\n').map((desc,i)=>(
                      <Fragment key={i}>
                        {desc}
                        <br/>
                      </Fragment>
                      ))}
                    </div>

                  </article>
                ) :
                null
              }
            </div>
          </Col>
        </Row>



      </Container>





      {/* {data.markdownRemark.frontmatter.featuredImage200 ? (
                    <div className="featured-thumbnail">
                      <Img fluid={data.markdownRemark.frontmatter.featuredImage200.childImageSharp.fluid} />
                    </div>
                  ) : null } */}




      {/* 
        {data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid === '' && (
            <span>This is only a test</span>
          )}
        {data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid !== '' && (
            <span>This is only another test</span>
          )} */}

    </Layout>
  )
}





export const query = graphql`
  query($slug:String!) {
    strapiPodcast(slug: {eq: $slug}) {
      email
    description
    id
    category{
      name
    }
    slug
    image {
      childImageSharp {
        fluid {
          base64
          ...GatsbyImageSharpFluid_withWebp   
        }
      }
    }
    social {
      link
      image {
        childImageSharp {
          fixed(width: 45) {
            base64
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    audioUrl
    phone
    text
    website
    strapiId
    name
    location
    }
  }
`

// <img src={podcast.social.image.childImageSharp.fixed} alt="Facebook Icon" className="facebookMaxWidth mr-2" />
