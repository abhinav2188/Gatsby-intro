import React from "react"
import containerStyles from "./container.module.css"
import {graphql, useStaticQuery} from 'gatsby'

export default function Container({ children }) {
    const data = useStaticQuery(
        graphql`
        query{
            site{
                siteMetaData{
                    title
                }
            }
        }
        `
    )
  return <div className={containerStyles.container}>
  <h3>{data.site.siteMetaData.title}</h3>
  {children}
  </div>
}