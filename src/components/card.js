import React from 'react'
import Link from 'gatsby-link'

const Card = props => (
  <li>
    <Link to={props.link}>
      <div className="card">
        <div className="image">
          <img src={props.image} alt="Title image for project" />
        </div>
        <div className="card-content">
          <h3 className="card-title">{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </Link>
  </li>
);

export default Card
