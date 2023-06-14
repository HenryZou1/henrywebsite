import React from "react"
import   "../styles/projectcard.css" 


export default function  Projectcard({data}){
    return (
      <div className="projectCard">
        <iframe className="leftside" src={data.video} allowfullscreen></iframe>
        <div className="rightside">
          <div className="titlecontainer">
            <a href={data.github} target="_blank" className="title">
              {data.title}
            </a>
          </div>
          <p> {data.body}</p>
        </div>
      </div>
    )
}
