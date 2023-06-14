import React from "react"


import Header from "../components/header"
import { StaticImage } from "gatsby-plugin-image"

import "../styles/about.css"

const About = () => {

  return (
    <div>
      <div className="aboutbackground">
        <Header />
        <div className="section">
          <div className="leftside">
            <StaticImage className="aboutimage" src="../images/HenrySuit.png" />
          </div>
          <div className="rightside">
            <p className="aboutpara ">
              My name is Henry Zou. I was born in Guang Zhou China.At the age of 5, I came to
              canada. I am a canadian citizen. I graduated
              Ryerson University 2020 summer with major in computer enginneering
              and minor in computer science. I enjoy reading novels, ping pong,
              watch TV series and video games. My favourite TV show as of late
              is the Office (US), community, and how I met your mother.
            </p>
          </div>
        </div>
        <div className="section">
          <div className="leftside">
            <div className="program-img">
              <StaticImage src="../images/programming.png" />
            </div>
          </div>
          <div className="rightside">
            <p className="programming">
              My first experience with programming was when I was in grade 9 and
              I modded one of the games I was playing. My first programming
              course was in grade 10 and was on a turing and throughout grade 11
              and 12 learned Java. In University, I took a bachelor's of
              computer enginneering. Computer enginneering was mainly focused on
              low level programming languages such as C, computer systems and
              architecture. In my minor in computer science, I learned more
              programming techniques such as pattern matching. I was able to
              expand my repertoire of programming languages to includes
              languages such as python, HTML, and CSS. I was also exposed to
              other paradigms of such as functional programming other languages
              such as haskell and elixir. My favourite type of language to write
              in is an object oriented language such as Java, or python because
              of their extensive API.
            </p>
          </div>
        </div>
        <div className="contact">
          <h2>Contact Me</h2>
          <p classname="email">
            Email : ypzou@ryerson.ca<br></br> Phone Number: 647-510-2896
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
