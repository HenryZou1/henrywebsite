import * as React from "react"
import "../styles/index.css"

import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/header"

const Index = props => (
  <div>
    <title>Henry Website</title>
    <Header />
    <div className="intro">
      <div className=" rightside center">
        <div className="main-text ">
          I'm Henry Zou.
          <br />
          A Software Developer
          <br />
          based in Toronto.
        </div>
        <div className="shortDesciption ">
          I am a versatile software developer who has worked with variety of 
          technology and has a positive altitude.
        </div>
      </div>

      <div className="leftside ">
        <StaticImage
          className="intro-image"
          src="../images/henry.jpg"
          alt=''
        />
      </div>
    </div>
    <div className="background">
      <div className="experience">
        <div className="leftside">
          <div className="flex">
            <StaticImage className="static" src="../images/td.jpg" alt="" />
            <StaticImage className="static" src="../images/fdm.jpg" alt="" />
          </div>
        </div>
        <div className="rightside ">
          <div className="body-text"> Work Experience</div>
          <div className="slideshow-text ">
            I have gained valuable experience and expertise through my roles as
            a Java Lead Developer at FDM and an IT Consultant at TD. These
            positions have allowed me to showcase my technical skills,
            leadership abilities, and problem-solving acumen in dynamic and
            challenging environments with an agile methodology. My experience
            encompasses system design and implementation, troubleshooting and
            incident resolution, documentation. I am adept at utilizing a range
            of tools and technologies such as mainframe, Java, servicenow,
            unix/linux server, Java Spring, cyberark, CA-7, C, HTML, CSS. I have
            a growth mindset and is always willing to learn new technologies,
            and techniques.
          </div>
        </div>
      </div>

      <div className="slideshow">
        <Carousel id="slide">
          <Carousel.Item>
            <StaticImage src="../images/camera.png" />
          </Carousel.Item>
          <Carousel.Item>
            <StaticImage src="../images/left.jpg" />
          </Carousel.Item>
          <Carousel.Item>
            <StaticImage src="../images/right.png" />
          </Carousel.Item>
        </Carousel>

        {/* <div className="leftside">
        <div className = "slideshow-text">Projects</div>
        <div className = "body-text"> My  projects are: pingpong ball detection with raspberry pi,
        a multimedia center, and the game jarknoid. For the pingpong ball detection, I bought and
        set up raspberry pi from a fresh sd card. I installed opencv.
        I found the range of color of the ball in HSV color space. I masked all the colors
        that is not within that color range and using open cv detected all large contours
        matched them to a circle. The multimedia center was on created on a MCB1700 board which uses
        ARM Cortex-M3 .It had a photo gallery, a mode to play audio from the computer via the usb.The photo
        gallery consist of presaved images in the format of bit maps. The Jarknoid game was
        a game of brick breaker code using Java. </div>
      </div> */}
      </div>
    </div>
  </div>
)

export default Index
