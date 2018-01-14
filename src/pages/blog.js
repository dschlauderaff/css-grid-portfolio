import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import '../css/blog-index.css'; // add some style if you want!

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return <div className="blog-posts">
      <figure>
        <blockquote>
          ...even though these are not part of the Way, if you know the Way broadly
          you will see it in everything...
        </blockquote>
        <figcaption>"The Earth Book" - Miyamoto Musashi</figcaption>
      </figure>
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
              <p>{post.excerpt}</p>
            </div>
          );
        })}
    </div>;
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
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
`;
