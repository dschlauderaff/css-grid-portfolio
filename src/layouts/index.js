import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import FaLinkedin from 'react-icons/lib/fa/linkedin-square'
import FaGithub from 'react-icons/lib/fa/github-square'
import FaTwitter from 'react-icons/lib/fa/twitter-square'
import FaUp from 'react-icons/lib/fa/angle-double-up'

import './index.css'



const Sidebar = () => (
  <sidebar id="sidebar">
    <div className="content-wrap">
      <div 
      id="name-logo"
      className="logo"
      style={{
        textTransform: 'uppercase',
        marginBottom: '1em',
      }}>
        David<span style={{fontWeight: 700}}>Schlauderaff</span>
      </div>
      <nav className="logo">
        <Link className="nav" exact activeStyle={{color: 'orange'}} to="/">Home</Link>
        <Link className="nav" activeStyle={{color: 'orange'}} to="/blog/">Blog</Link>
        <Link className="nav" activeStyle={{color: 'orange'}} to="/portfolio/">Portfolio</Link>
        <Link className="nav" exact activeStyle={{color: 'orange'}} to="/about">About</Link>
        <Link className="nav" exact activeStyle={{color: 'orange'}} to="/about#contact">Contact</Link> 
      </nav>  
    </div>
  </sidebar>
)

const Footer = () => (
  <footer id="main-footer" className="grid">
    <div className="icon">
      <Link to="#showcase" id="page-top" className="button"><FaUp size={45} color='orange' /></Link>
    </div>
    <div className="icon">
      <a href="https://www.linkedin.com/in/dave-schlauderaff" target="_blank"><FaLinkedin size={35} color='orange'/></a>
      <a href="https://www.github.com/dschlauderaff" target="_blank"><FaGithub size={35} color='orange'/></a>
      <a href="https://www.twitter.com/dschlauderaff" target="_blank"><FaTwitter size={35} color='orange' /></a>
    </div>
    <div className="footnote icon">DAVID SCHLAUDERAFF 
      <span className="highlight">©2018</span>
    </div>

  </footer>
)

const TemplateWrapper = ({ children }) => (
  <div> 
    <Helmet
      title="The Way Broadly"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div id="main-grid">
      <Sidebar id="sidebar" />
      
      {children()}
    
      <Footer id='footer'/>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
