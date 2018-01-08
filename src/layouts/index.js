import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <header id="showcase" className="grid">
    <div className="bg-image"></div>
    <h1>Welcome to My Site tchange this</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure similique possimus quos maxime perspiciatis cupiditate itaque veniam nulla unde non, molestiae reprehenderit, fuga commodi obcaecati, nobis magnam tempora distinctio qui.</p>
    <Link to="/" className="button">Read More</Link>
  </header>
)

const navStyle = {
  color: '#737373',
  textDecoration: 'none',
  fontSize: '1.7rem',
  display: 'inline-block',
  marginRight: '3em',
  paddingBottom: '1em',
  outline: 0,
}

const Sidebar = () => (
  <sidebar className={"sidebar"} style={{
    //gridColumn: '1 ',
    //gridRow: '1 / span 8',

    padding: '3em',
    background: '#4f4f4f',
  }}>
    <div style={{
      textTransform: 'uppercase',
      marginBottom: '2em',
    }}>
      David<span style={{fontWeight: 700}}>Schlauderaff</span>
    </div>
    <nav>
      <Link style={navStyle} exact activeStyle={{color: '#c4c4c4'}} to="/">Home</Link>
      <Link style={navStyle} activeStyle={{color: '#c4c4c4'}} to="/blog/">Blog</Link>
      <Link style={navStyle} activeStyle={{color: '#c4c4c4'}} to="/portfolio/">Portfolio</Link>
      <Link style={navStyle} activeStyle={{color: '#c4c4c4'}} to="/about/">About</Link>
      <Link style={navStyle} activeStyle={{color: '#c4c4c4'}} to="/contact/">Contact</Link> 
    </nav>  
  </sidebar>
)

const Footer = () => (
  <footer id="main-footer" className="grid">
  // It would be cool to have a link back to the top of the screen here
    <div className="icon">
      <Link to="/https://www.linkedin.com/in/davidschlaueraff">linkedin icon</Link>
      <Link to="/https://www.github.com/dschlauderaff">Github icon</Link>
      <Link to="/https://www.twitter.com/dschlauderaff">Twitter icon</Link>
    </div>
    <div className="footnote">DAVID SCHLAUDERAFF 
      <span className="highlight">©2018</span>
    </div>

  </footer>
)

const TemplateWrapper = ({ children }) => (
  <div style={{
    //background: "#353535",
    color: '#c4c4c4',
    fontSize: '1.2rem',
    lineHeight: '1.45',
    //display: 'grid',
    //gridTemplateColumns: '400px repeat(4, 1fr)',
    //gridTemplateRows: 'repeat(5, 1fr)',
    

  }}>
    <Helmet
      title="The Way Broadly"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {/* <Header /> */}
    {/* <Sidebar /> */}
    <div>
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
