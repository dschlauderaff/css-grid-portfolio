import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'
import gears from '../img/gears.jpg'

const IndexPage = () => (
  <div>
    <header id="showcase" className="grid">
      <div className="bg-image"></div>
      <h1>Something something</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure similique possimus quos maxime perspiciatis cupiditate itaque veniam nulla unde non, molestiae reprehenderit, fuga commodi obcaecati, nobis magnam tempora distinctio qui.</p>
      <Link to="/" className="button">Read More</Link>
    </header>
    <main id="main">
      {/* Section A About*/}
      <section id="section-a" className="grid">
        <div className="content-wrap">
          <h2 className="content-title">About Me CHANGE THIS</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque laborum magni nemo autem, possimus voluptas dolorem vel esse, eius dignissimos doloribus nihil beatae provident sapiente repellendus ipsa nisi neque animi perspiciatis ratione illo. Autem consequatur, ipsa expedita dicta praesentium quae!</p>
        </div>
      </section>

      {/* Section B - Blog */}
      <section id="section-b" className="grid">
        <div className="content-wrap">
          <h2 className="content-title">Technical Blog</h2>
          <p>This section will be a link to the technical blog</p>
          <p>Perhaps an excerpt of the latest post?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus eligendi eaque ducimus, quisquam fuga animi placeat nesciunt ea voluptatum, aliquam eveniet. Voluptates harum consectetur reprehenderit.</p>
        </div>
      </section>

      {/* Section C - Projects */}
      <section id="section-c" className="grid">
        <ul>
          {/* Each card is a component  */}
          <Card
            image={gears}
            title="test title card"
            description="an amendment to be, yes an amendment to be"
            link="#"
          />
          <Card
            image="won't work anyway"
            title="test numero dos"
            description="i'll need to figure out how to iterate an array of these"
            link="#"
          />
          <Card
            image="won't work anyway"
            title="test numero tres"
            description="i'll need to figure out how to iterate an array of these"
            link="#"
          />
        </ul>
      </section>

      {/* Section D - Tools I use & Contact*/}
      <section id="section-d" className="grid">
        <div className="box">
          <h2 className="content-title">Tools I Use</h2>
          <p>There will be icons for git, vscode, firefox dev(?)</p>
        </div>
        <div className="box">
          <h2 className="content-title">Contact</h2>
          <p>dschlaud@gmail.com</p>
        </div>
      </section>
    </main>
  </div>
)

export default IndexPage
