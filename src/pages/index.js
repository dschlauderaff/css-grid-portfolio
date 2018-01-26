import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'
import gears from '../img/gears.jpg'
import FaEnvelope from 'react-icons/lib/fa/envelope'


const IndexPage = () => {
// export default ({ data }) => {
  // debugger
  return (
    <main id="main">
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

    </main>
)
};





export default IndexPage
