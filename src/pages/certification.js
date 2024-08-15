import React from "react"

import Header from "../components/header"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/certification.css"
export default function certification() {
  return (
    <div>
      <Header />
      <title>Work</title>
      <div className="aboutbackground">
        <div className="picture">
          <StaticImage
            style={{ width: "50vw", height: "40vw" }}
            imgStyle={{ objectFit: "contain" }}
            src="../images/AZ-900.png"
            alt="AZ 900"
          />
        </div>
        <div className="picture">
          <StaticImage
            style={{ width: "50vw", height: "40vw" }}
            imgStyle={{ objectFit: "contain" }}
            src="../images/bachelor.png"
            alt="Bachelors"
          />
        </div>
      </div>
    </div>
  )
}
