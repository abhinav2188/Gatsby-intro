import React from "react"
import { Link, graphql } from "gatsby"
import Container from "../components/container"

export default function Home({ data }) {
  return (
    <Container>
      <p>posts {data.allMarkdownRemark.totalCount}</p>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} style={{border:"1px solid #ccc", margin:"10px 0px", padding:"0px 20px 10px"}}>
          <h3>
            {node.frontmatter.title} -- {node.frontmatter.date}
          </h3>
          <p>{node.excerpt}</p>
          <Link to={node.fields.slug} style={{textDecoration:"none"}}>Read more</Link>
        </div>
      ))}
    </Container>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt(truncate: true, pruneLength: 50, format: PLAIN)
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`
