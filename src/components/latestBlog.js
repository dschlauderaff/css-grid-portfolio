import React from 'react'
import Link from 'gatsby-link'

export default function latestBlog({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      {posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post}) => {
        return <div key={post.id}>
            <h2>
              <Link to={post.frontmatter.path}>
                {post.frontmatter.title}
              </Link>
            </h2>
            <small>{post.frontmatter.date}</small>
            <p>{post.excerpt}</p>
          </div>;
      })}
    </div>
  )
}

export const pageQuery = graphql`
  query LatestQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
`;