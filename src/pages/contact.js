import React from "react"
// import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Img from "gatsby-image"
import { Container, Row, Col, Form, Button } from "react-bootstrap"


const SecondPage = (props) => (
  <Layout>
    <SEO title="Contact Us" />
    <h1 className="text-center">Contact Us</h1>
    <Container>

        <Row>
            <Col lg={6}>
      
                
                <p>Looking to be a guest on our Podcast, have praise for us, or want to give us some feedback? We've also got a form for that as well. Let us know how best we can improve or that we're doing a pretty darn good job. We want you to have the best experience on the islands.</p>
            </Col>
        
        <Col  lg={6}>
          <Form 
                    name="general form v1"
                    method="post"
                    action="/contact-success/"
                    
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit="submit"
                    >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="general form v1" />
                    <p hidden>
                    <label>
                        Don’t fill this out: <input name="bot-field" />
                    </label>
                    </p>
                     


                        <Row>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control 
                                        type="text" name="first-name"
                                     />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                            <Form.Group>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control 
                                       type="text" name="last-name"

                                     />
                            </Form.Group>
                            </Col>
                        </Row>


                            
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                required
                                type="email" 
                                name="email" 
                            />
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Label>Questions, concerns, praise…</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                name="questions-concerns-prais"
                                rows="3"
                                placeholder="Do you want to be a guest on the show? Want to know more about the Cook Islands? Let us know!"
                             />
                        </Form.Group>
                        
                        <Button type="submit">Submit your inquiry to both of us</Button>
                        </Form>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default SecondPage
