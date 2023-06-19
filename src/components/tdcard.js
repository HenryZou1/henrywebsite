import React from "react"
import "../styles/tdcard.css"
import { StaticImage } from "gatsby-plugin-image"
export default function Tdcard({ data }) {
  return (
    <div className="projectCard">
      <StaticImage className="leftside" src="../images/td.jpg" />
      <div className="rightside">
        <div className="titlecontainer">
          <p className="titlenolink">{data.title}</p>
        </div>
        <p> {data.body}</p>
      </div>
    </div>
  )
}
