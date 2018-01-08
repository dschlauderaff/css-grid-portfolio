import React from 'react'
import Link from 'gatsby-link'

const Card = props => (
  <li>
    <div className="card">
      <img src={props.image} alt="Title image for project"/>
      <div className="card-content">
        <h3 className="card-title">
          <Link to={props.link}>{props.title}</Link>
        </h3>
        <p>{props.description}</p>
      </div>
    </div>
  </li>
)

export default Card
