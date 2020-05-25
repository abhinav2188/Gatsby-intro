import React from "react"
import {graphql} from "gatsby"
import Container from "../components/container" 

const BlogPost = (props) => {
    console.log(props);
    const blogData = props.data.markdownRemark;
    return(
        <Container>
            <h1>{blogData.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html:blogData.html}}></div>
        </Container>
    );
}

export default BlogPost;

export const query = graphql`
query($slug : String!){
    markdownRemark(fields: {slug : {eq: $slug}}) {
      frontmatter {
        date
        title
      }
      excerpt
      html
    }
  }
`