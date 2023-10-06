import React from "react"
import "../styles/jobcard.css"

export default function Jobcard({ data }) {
  return (
    <div className ={"job "+data.class}>
      <h3 className="number">{data.number}</h3>
      <div>
        <p1 className="company">
          <span>{data.company}</span>, {data.jobtitle}<br></br>
        </p1>
        <p2 className="description">{data.description}</p2>
      </div>
    </div>
  )
}
