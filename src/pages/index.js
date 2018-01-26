import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'
import gears from '../img/gears.jpg'
import FaEnvelope from 'react-icons/lib/fa/envelope'


// const IndexPage = () => (
export default ({ data }) => {
  // debugger
  const { edges: posts } = data.allMarkdownRemark
  return <main id="main">
      <div id="showcase" className="grid">
        <div className="content-wrap">
          <h2>
            Hi, my name is David. I am a Full Stack Web Developer living in
            Fort Worth, TX.
          </h2>
          <Link to="/portfolio/" className="button">
            SEE MY WORK
          </Link>
        </div>
      </div>

      {/* Section A - Projects */}
      {/* <section id="section-a" className="grid">
        <ul> */}
          {/* Each card is a component  */}
          {/* <Card image={gears} title="test title card" description="an amendment to be, yes an amendment to be" link="#" />
          <Card image={gears} title="test numero dos" description="i'll need to figure out how to iterate an array of these" link="#" />
          <Card image={gears} title="test numero tres" description="i'll need to figure out how to iterate an array of these" link="#" />
        </ul>
      </section> */}

      {/* Section B - Blog */}
      <section id="section-b" className="grid">
        <h2 className="content-title">Latest Blog Entries</h2>
        <div className="blog-posts">
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <div className="blog-post-preview" key={post.id}>
                  <h2>
                    <Link to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                  <p>{post.excerpt} <Link to={post.frontmatter.path}>read more</Link></p>
                </div>
              );
            })}
        </div>
      </section>

      {/* Section C About - Moved to separate page*/}

      {/* Section D - Tools I use & Contact*/}
      {/* <section id="section-d" className="grid">
        <div className="box">
          <h2 className="content-title">Tools and Frameworks</h2>
          <ul className="tools">
            <li>Ruby on Rails</li>
            <li>Sinatra</li>
            <li>RSpec</li>
            <li>Mocha</li>
            <li>PostgreSQL</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Redux</li>
            <li>GatsbyJS</li>
            <li>Heroku</li>
            <li>Git</li>
            <li>CSS</li>
            <li>Webpack</li>
            <li>Yarn</li>
            <li>npm</li>
            <li>PostCSS</li>
          </ul>
        </div>
        <div className="box">
          <h2 className="content-title">Contact</h2>
          <a href="mailto:dschlaud@gmail.com" target="_top">
            <FaEnvelope size={25} /> dschlaud@gmail.com
          </a>{" "}
        </div>
      </section> */}

      {/* Section E Spacer Image */}
      {/* <section id="section-e">
        <Link to="/about/" className="button">
          ABOUT ME
        </Link>
      </section> */}
    </main>;
}
// );

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date] }, limit: 2) {
      edges {
        node {
          excerpt(pruneLength: 500)
          id
          frontmatter { 
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    } 
  }
`




// export default IndexPage
