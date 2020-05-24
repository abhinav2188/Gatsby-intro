import React from "react"
import { Link , graphql} from "gatsby"
import Container from "../components/container"

export default function Home({data}) {
  return (
    <Container>
      <Link to="/contact/">Contact</Link>
      Hello world!
      <p>
      {data.site.siteMetadata.title}
      </p>
    </Container>
  )
}

export const query = graphql `
  query{
    site{
      siteMetadata{
        title
      }
    }
  }
`