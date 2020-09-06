import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Img from "gatsby-image"
import { Container, Row, Col, Button, Card } from "react-bootstrap"


const SecondPage = (props) => (
  <Layout>
    <SEO title="Donate to the Kia Orana Podcast" />
    <h1 className="text-center">Donate to the Kia Orana Podcast</h1>
    
    <Container className="singleCol">
      <hr />
      <h2 className="text-center pb-3">We tried running this podcast on coconuts alone. While our electrolytes were overall higher, our bank accounts weren't.</h2>

      <p>Telecommunications in the Cook Islands is capped and not unlimited— it is expensive compared to the outside world, due in part to the small population of users. In addition, Chantal and Haydn spend hours behind the scenes arranging interviews and then editing and uploading episodes that will always be free to you, the listener.</p>

      <p>If you're loving all of our episodes on the podcast, we'd love for you to be a financial backer of our endeavor. A donation will help to make the Kia Orana Podcast even more successful. We've made it easy, with either a one-time donation or a recurring payment that comes with some awesome perks.</p>

      <p>Meitaki Maata (thank you very much),<br />
        Chantal Napa & Haydn Adams
      </p>
      <hr />
    </Container>
    <Container>
      <Row>
        <Col lg={5}>
          <Card>
            <Card.Body>
              <Card.Title><h2>One Time Donation</h2></Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text> */}

              {/* <p>
                <strong>Coming soon!</strong> We're just awaiting PayPal to give us the green light. If you want to make a one-time donation at this time, shoot us a message through the <Link to="/contact/">contact page</Link> and we'll make you a custom invoice. Just let us know how much you want to make the donation for and we'll get that out to you. Thanks!
              </p> */}
              {/* <p>
              <Button variant="primary" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=L5JGHRJUB5BT4&source=url">Donate in Euros</Button>
              </p> */}


              {/* Kia Orana email  */}
              
               
               <p>
                 <Button variant="primary" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YM67B86GSA7A2&source=url">Donate in New Zealand Dollars</Button>
               </p>
               <p>
                 <Button variant="primary" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BSWVRRE6NUKYS&source=url">Donate in US Dollars</Button>
               </p>
               <p>
               <Button variant="primary" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=L5JGHRJUB5BT4&source=url">Donate in Euros</Button>
               </p>

              <p><small><em>Donations are ultimately processed within the United States, as PayPal is a U.S.-based company. A foreign transaction fee may apply. Please contact your financial instution for more information.</em></small></p>
            </Card.Body>
          </Card>
        </Col>
      <Col lg={7}>
          <Card>
            <Card.Body>
              <Card.Title><h2>Recurring Payments (with perks!)</h2></Card.Title>
              <Card.Text>
                <p>
                We understand that recurring payments can be a larger fianncial investment. So we have a patreon page that, with payments over $20/month, comes some serious perks. Like being able to watch our Zoom (video) calls that ultimately turn into our podcasts.</p>
                <p>
                  In addition, at higher values, you'll have the ability to be listed on our show notes and receive shoutouts on future podcasts.
                </p>
                <p>Recurring Payments start at only $5 USD (approx. $7.50 NZD)</p>
              </Card.Text>
              <p className="text-center">
                <Button variant="primary" href="https://www.patreon.com/kiaoranapodcast?fan_landing=true">Setup a Recurring Payment through Patreon</Button>
              </p>
              <p><small><em>Donations are ultimately processed within the United States, as Patreon is a U.S.-based company. A foreign transaction fee may apply. Please contact your financial instution for more information.</em></small></p>
            </Card.Body>
          </Card>
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