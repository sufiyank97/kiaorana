import React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Img from "gatsby-image"
import { Container } from "react-bootstrap"


const SecondPage = (props) => (
  <Layout>
    <SEO title="Contact Us - Success" />
    <h1 className="text-center">Contact Us - Success</h1>
    <Container className="singleCol">
      
      <p>Thanks! We'll get back to you as soon as possible.</p>
      
    </Container>
  </Layout>
)

export default SecondPage
