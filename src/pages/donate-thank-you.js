import React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Img from "gatsby-image"
import { Container} from "react-bootstrap"


const SecondPage = (props) => (
  <Layout>
    <SEO title="Thank You For Donating!" />
    <h1 className="text-center">Thank You For Donating!</h1>
    
    <Container className="text-center">
      <p>Thank you for donating to the Kia Orana Podcast. We appreciate it!</p>
    </Container>
  </Layout>
)

export default SecondPage
