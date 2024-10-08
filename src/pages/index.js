import * as React from "react"
import "../styles/index.css"

import "bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/header"
import Jobcard from "../components/jobcard"
import {useIsVisible} from "../hooks/useIsVisible"
import { useRef, useEffect } from "react"
const Index = () => {
  
  
  return (
    <div>
      <title>Henry Website</title>
      <Header />
      <Intro></Intro>
      <Work></Work>

      <div className="aboutme">
        <h1 id="blacktext">About Me</h1>

        <div className="program-img">
          <StaticImage className="aboutimage" src="../images/henry.png" />
        </div>
        <p className="aboutpara" id="blacktext">
          I was born in Guang Zhou China. At the age of 5, I came to canada and
          became a canadian citizen. I graduated Ryerson University from Ryerson
          University with a bachelors in computer engineer and a minor in
          computer science. My hobbies are going to the gym, playing video
          games, and reading novels. I enjoy programming and like to work with
          the backend of the system. Also, I enjoy troubleshoot and code
          reviewing as that is when I can see different perspectives of how to
          problem solve and new ideas. I have a growth mindset and enjoy
          learning something new everyday.
        </p>
      </div>
      <div className="project">
        <h1 id="whitetext">Latest Project</h1>
        <iframe
          src="https://www.youtube.com/embed/q-I23hkDPwI"
          allowfullscreen
          width="50%"
          height="70%"
          title="IBM App Connect Project"
        ></iframe>
      </div>
      <div className="containerslide">
        <div className="slideshow">
          <Carousel id="slide">
            <Carousel.Item>
              <StaticImage
                src="../images/camera.png"
                href="/project"
                alt="camera"
              />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage
                src="../images/left.jpg"
                href="/project"
                alt="board"
              />
            </Carousel.Item>
            <Carousel.Item>
              <StaticImage
                src="../images/right.png"
                href="/project"
                alt="game"
              />
            </Carousel.Item>
          </Carousel>
        </div>
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
      </div>
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
       */}
      </div>
    </div>
  )
}

function Intro(){
  return (
    <div key="intro" className="intro">
      <div className="intro-left">
        <StaticImage
          className="intro-image"
          src="../images/myAvatar.png"
          alt="picture"
        />
      </div>
      <div className="intro-right">
        <div className="main-text">
          I'm Henry Zou.
          <br />
          A Software Developer
          <br />
          based in Toronto.
        </div>
        <div className="shortDesciption ">
          I am a versatile software developer who has worked with a variety of
          technology and always has positive attitude.
        </div>
      </div>
    </div>
  )
}
function Work(){
  const ref = useRef()
  const isVisible = useIsVisible(ref)
  useEffect (()=> {})
  return (
    <div className="workexperience" ref={ref}>
      <div className="worktitle">work experience</div>
      <br />
      <div className="worktitle1">Companies I have worked in the past.</div>
      <div className="workcard">
        <Jobcard
          data={{
            number: "01",
            company: "FDM Group",
            jobtitle: "Software Developer",
            class: isVisible ? "animate1" : "",
            description:
              "I was a Java developer for FDM Group. I was a technical team lead for their ticketing consultant portal. I set priority for the jira story backlog, write and refine stories. I would do code reviews, troubleshoot bugs and write code to complete my user story. Biweekly, I would lead the code merge meeting for the team and would present to stakeholders a demonstrations of new features after every sprint.",
          }}
        ></Jobcard>
        <Jobcard
          data={{
            number: "02",
            company: "TD Bank",
            jobtitle: "Mainframe developer",
            class: isVisible ? "animate2" : "",
            description:
              "I was a mainframe developer for TD Bank. I was apart of their L2 application support team for TD's CORE Products. I troubleshoot production applications incidents and complete service request such as finanical history extract, account statement inquiry, compound interest statement. I have resolved 143 incidents and 184 service request within TD's service level argreement.",
          }}
        ></Jobcard>
        <Jobcard
          data={{
            number: "03",
            company: "Hatchways",
            jobtitle: "Software developer",
            class: isVisible ? "animate3" : "",
            description:
              "I was a software developer intern for Hatchways. I completed new feature for their webcrawler project which would crawl through reddit for information about a company.",
          }}
        ></Jobcard>
      </div>
    </div>
  )
}
export default Index
