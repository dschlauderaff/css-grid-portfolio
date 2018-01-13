import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import profile from "../img/profile.jpg"

import "../css/about.css"

export default class ContactPage extends React.Component {
  render() {
    return <div id="about-page">
        <div id="portrait">
          <img src={profile} alt="Dave Schlauderaff profile picture" />
        </div>
        <div id="about-text">
          <h2>About Me</h2>
          <div className="text-wrap">
            <p>
              I'm a full-stack web developer using using Ruby on Rails, JavaScript, and ReactJS. I studied web development at <a href="https://flatironschool.com/">
                Flatiron School
              </a> through their Online Immersive Bootcamp. More than just teaching the how and why of development, Flatiron's instructors have an infectious passion for the art of programming. "Love what you do", people say, so now I want to do what I am passionate about: learning and programming.
            </p>
            <p>
              Before learning web development, I was a retail store manager for Barnes & Noble Education. I worked for the company for 14 years, and in that time I learned many valuable skills, including time-management, communication, and the ability to work and learn independently.
            </p>
            <p>
              I enjoy building things. Woodworking is a hobby of mine, and one of my favorite aspects of web development is having a product at the end of a project and being able to say "I built that". I'm searching for a position with a company where I can continue to grow as a developer. You can check out some of my projects <Link to="/portfolio/">
                here.
              </Link>
            </p>
          </div>
        </div>
        <div id="contact">
          <h2>Contact Me</h2>
          <form name="contact" method="post" action="/thanks/" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <p id="name">
              <label>
                Your name:<br />
                <input type="text" name="name" />
              </label>
            </p>
            <p id="email">
              <label>
                Your email:<br />
                <input type="email" name="email" />
              </label>
            </p>
            <p id="message">
              <label>
                Message:<br />
                <textarea name="message" />
              </label>
            </p>
            <p id="submit">
              <button className="button" type="submit">
                Send
              </button>
            </p>
          </form>
        </div>
      </div>;
  }
}
