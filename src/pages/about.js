import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { Container, Row, Col, Button } from "react-bootstrap"


const SecondPage = (props) => (
  <Layout>
    <SEO title="About" />
    <h1 className="text-center">About the Kia Orana Podcast</h1>
    
    <Container>
    <hr />
      <Row>
        <Col lg={4}>
          <p>
            <Img 
              fluid={props.data.indexImage.childImageSharp.fluid} 
              alt="Chantal and Haydn"
              className="card-img-top"
              fadeIn
            />
          </p>
        </Col>
        <Col lg={8}>
          <h2>Chantal and Haydn, a Rarotongan and an American</h2>
          <p>In 2019, Haydn wrote a book about the Cook Islands; <em>How I Fell In Love With an Island.</em> Chantal ran across the book while on holiday on Aitutaki and got in contact with him. A friendship was formed and before too long, a podcast came out of their friendship. Chantal brings to the Kia Orana podcast a local perspective of the island, while Haydn comes from a tourist, let alone an American perpsective.</p>
      <p>In each podcast episode, they bring their knowledge together to inform you of what you'll expect to find, and what you won't find in the Cook Islands. They both believe that the islands are special, unlike anywhere else on earth. It's their unique perspectives that truly makes the Kia Orana Podcast special.</p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col lg={4}>
          <p>
            <a href="http://www.cookislandsnews.com/features/weekend/item/77637-chantal-s-recipe-for-success">
              <Img 
                fluid={props.data.newsClipping.childImageSharp.fluid} 
                alt="Clipping of Newspaper featuring Chantal and Haydn"
                className="card-img-top"
                fadeIn
              />
            </a>
          </p>
        </Col>
        <Col lg={8}>
          <h2>Featured in the Cook Islands News: <strong>Chantal’s recipe for success</strong></h2>
          <p>Award-winning tourism operator Chantal Napa barely paused for breath after the travels bans shut down her business; now she has launched a Cook Islands podcast with US business partners Haydn Adams. Rashneel Kumar conducts a three-way trans-Pacific interview with the podcasters.</p>
          <p>
          When Chantal Napa started her online holiday and tour booking company in 2016, people doubted the concept.</p>
          <p>They said Chantal’s Concierge was new to the local market and would not work.</p>
          <p>Napa proved them wrong – the business became a major success within months and performed well.</p>
          <p><a href="http://www.cookislandsnews.com/features/weekend/item/77637-chantal-s-recipe-for-success"><strong>Read the entire article</strong></a></p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col lg={4}>
          <Img 
            fluid={props.data.islandBook.childImageSharp.fluid} 
            alt="Cover of the book, How I Fell In Love With an Island"
            className="card-img-top"
            fadeIn
          />
        </Col>
        <Col lg={8}>
          <h2>The Book: How I Fell in Love With an Island</h2>
          <p>There’s a magical place in the middle of nowhere in the South Pacific.
Devoid of stoplights, Starbucks or free wifi. Where coconut juice is refreshing and the beauty pristine. It’s a place where people often ask, “What exactly do you do there?” Author Haydn Adams discovered the answer to that question with every day he spent on the island nation.</p>
          <p>

But it wasn’t the white sandy beaches or the world’s most beautiful lagoon that drew him back to the Cook Islands a second time. It was the islanders who showed Haydn how to live, laugh and enjoy paradise. Pride and love are interwoven into daily life in this island nation. Enjoy reading how Haydn fell in love with an island, maybe you will too.</p>
<Button href="https://www.amazon.com/How-Fell-Love-Island-Accidental-ebook-dp-B07JKLY142/dp/B07JKLY142/ref=mt_kindle?_encoding=UTF8&me=&qid=1542067343">Purchase the eBook or Softcover on Amazon</Button>
        </Col>
      </Row>
      
      
    </Container>
  </Layout>
)

export default SecondPage

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "chantal-and-haydn.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 50) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    newsClipping: file(relativePath: { eq: "chantal-news.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    islandBook: file(relativePath: { eq: "how-I-fell-in-love-with-an-island-book.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700, quality: 70) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;