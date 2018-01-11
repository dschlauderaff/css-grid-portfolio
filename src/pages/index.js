import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'
import gears from '../img/gears.jpg'
import git from '../img/git.png'
import FaEnvelope from 'react-icons/lib/fa/envelope'


const IndexPage = () => (
  <main id="main">
    <div id="showcase" className="grid">
      <div className="content-wrap">
        <h2>
          Hi, my name is David. I am a Full Stack Web Developer living in Fort
          Worth, TX.
        </h2>
        <a href="#section-c" className="button">
          Read More
        </a>
      </div>
    </div>

    {/* Section A - Projects */}
    <section id="section-a" className="grid">
      <ul>
        {/* Each card is a component  */}
        <Card
          image={gears}
          title="test title card"
          description="an amendment to be, yes an amendment to be"
          link="#"
        />
        <Card
          image={gears}
          title="test numero dos"
          description="i'll need to figure out how to iterate an array of these"
          link="#"
        />
        <Card
          image={gears}
          title="test numero tres"
          description="i'll need to figure out how to iterate an array of these"
          link="#"
        />
      </ul>
    </section>

    {/* Section B - Blog */}
    <section id="section-b" className="grid">
      <div className="content-wrap">
        <h2 className="content-title">Technical Blog</h2>
        <p>This section will be a link to the technical blog</p>
        <p>Perhaps an excerpt of the latest post?</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          eligendi eaque ducimus, quisquam fuga animi placeat nesciunt ea
          voluptatum, aliquam eveniet. Voluptates harum consectetur
          reprehenderit.
        </p>
      </div>
    </section>

    {/* Section C About*/}
    <section id="section-c" className="grid">
      <div className="content-wrap">
        <h2 className="content-title">About Me</h2>
        <div className="content-text">
          <p>
            I'm a full-stack web developer using using Ruby on Rails,
            JavaScript, and ReactJS. I studied web development at{" "}
            <a href="https://flatironschool.com/">Flatiron School</a> through
            their Online Immersive Bootcamp. Prior to this, I was a retail store manager for Barnes & Noble Education.
          </p>
          <p>
            I enjoy building things. Woodworking is a hobby of mine, and one of my favorite aspects of web development is
            having a product at the end of a project and being able to say "I built
            that". You can check out some of them <Link to="/portfolio/">
              here.
            </Link>
          </p>
        </div>
      </div>
    </section>

    {/* Section D - Tools I use & Contact*/}
    <section id="section-d" className="grid">
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
    </section>
  </main>
);

export default IndexPage
