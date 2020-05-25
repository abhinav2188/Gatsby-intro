import React from "react"
import { graphql} from "gatsby"
import Container from "../components/container"

export default function Home({data}) {
  return (
    <Container>
      <p>
      {data.site.siteMetadata.title}
      </p>
      <p>posts {data.allMarkdownRemark.totalCount}</p>
      {data.allMarkdownRemark.edges.map(({node},index) => (
        <div key={index}>
          <h3>{node.frontmatter.title} - {node.frontmatter.date}</h3>
          <p>{node.excerpt}</p>
        </div>
      ) )}
    </Container>
  )
}

export const query = graphql `
  query{
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          excerpt(truncate: true, pruneLength: 50, format: PLAIN)
          html
          frontmatter {
            title
            date
          }
        }
      }
      totalCount
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`