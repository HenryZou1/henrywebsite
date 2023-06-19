import React from "react"
import   "../styles/projectcard.css" 


export default function  Projectcard({data}){
    return (
      <div className="projectCard">
        {data.hasOwnProperty("video") && (
          <iframe
            className="leftside"
            src={data.video}
            allowfullscreen
          ></iframe>
        )}
        <div className="rightside">
          <div className="titlecontainer">
            {data.hasOwnProperty("github") ? 
              <a href={data.github} target="_blank" className="title">
                {data.title}
              </a>
             : 
              <a className="titlenolink">{data.title}</a>
            }
          </div>
          <p> {data.body}</p>
        </div>
      </div>
    )
}
