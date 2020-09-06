import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"
// import PodcastHeader from "./podcast-header"

// import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import logo from "../images/kia-orana-podcast.svg"

const Header = ({ siteTitle }) => (
  <header>
        <div className="podcast-header"></div>
        <Navbar className="navbar navbar-dark navbar-expand-md" id="mainNav" expand="xl"
                collapseOnSelect={true}>
          
            <Link className="navbar-brand" to='/'>
              <img src={logo} alt={siteTitle} className="logo imgFullCol" width="200" />
            </Link>
            <Navbar.Toggle aria-controls="navbarResponsive"/>
            <Navbar.Collapse id="navbarResponsive">
              <Nav className="navbar-nav text-center ml-auto" >
              <ul className="navbar-nav  text-center">
            
                <li><Link to="/explore/" className="nav-link" activeClassName="active">Explore The Cook Islands</Link></li>
                <li><Link to="/about/" className="nav-link" activeClassName="active">About</Link></li>
            
                <li><Link to="/contact/" className="nav-link" activeClassName="active">Contact Us</Link></li>
                <li><Link to="/donate/" className="nav-link" activeClassName="active">Donate</Link></li>
              </ul>
              </Nav>
            </Navbar.Collapse>
          
        </Navbar>
  </header>
)


export default Header
