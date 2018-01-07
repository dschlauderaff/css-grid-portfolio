import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
)

const navStyle = {
  color: '#737373',
  textDecoration: 'none',
  fontSize: '1.7rem',
  display: 'inline-block',
  marginRight: '3em',
  paddingBottom: '1em',
}

const Sidebar = () => (
  <div style={{
    gridColumn: '1 ',
    gridRow: '1 / span 8',

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
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div style={{
    background: "#353535",
    color: '#c4c4c4',
    fontSize: '1.2rem',
    lineHeight: '1.45',
    display: 'grid',
    gridTemplateColumns: '400px repeat(4, 1fr)',
    gridTemplateRows: 'repeat(5, 1fr)',
    

  }}>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {/* <Header /> */}
    <Sidebar />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
