import React from "react"

import Header from "../components/header"
import ProjectCard from "../components/Projectcard"
const mentionData = {
  title: "Mentions Crawler",
  video: "https://www.youtube.com/embed/eoHvDXE8yk4",
  github: "https://github.com/hatchways/team-banh-mi",
  body: `In this fullstack application, I worked in a group of three with a team lead from hatchways.
         This application is created using react, material ui, express
         and redis. The application has a user login with the help of mongo Db and express. The application
         searches through reddit and twitter. The website scraping is done by a background worker in redis. The
         name of the companies is from the list of company name from the user database. New information is update
         every minute using cron jobs. Also, I made a short presentation about it shown in the youtube video.`,
}
const jpegData = {
  title: "Image Compression",
  video: "https://www.youtube.com/embed/0tReKY53FXc",
  github:
    "https://github.com/HenryZou1/multimedia_projects/tree/master/jpegcompression",
  body: `In this matlab program, I demonstrated jpeg compression. Using Matlab,
         I broke the image into 8 by 8 blocks to compress the image using discrete cosine tranformation.
         Then, I apply the reverse process and reconstruct the image to show the results after the compression.
         Also, made a short presentation about it shown in the youtube video.`,
}
const peerData = {
  title: "Peer to Peer TCP Download Application",
  video: "https://www.youtube.com/embed/5zl6P-1v1X4",
  github: "https://github.com/HenryZou1/Socket-download-server",
  body: `In this application, I created a peer to peer download program in python with TCP network socket.
        This program works within the local area network and works like a torrent program. 
        This application has two components a client and a server. The server component listens to connection from multiple client and 
        services them when needed. The client listens for incoming connections from other clients and run user commands at the same time with
        python's multiprocessing api. Clients register their socket location, and file name to the server database. When the client wants to
        download from application, it makes a request to the server which will return the socket location of the given file. It will then
        download the file from the other client's socket directly.`,
}
const vgaData = {
  title: "VGA Driver",
  video: "https://www.youtube.com/embed/s38G3kd-XLY",
  github:
    "https://github.com/HenryZou1/pong-game-with-vgadriver-for-Xilinx-Spartan-3EFPGA",
  body: `Using the Xilinx Sparatan-3E FPGA, created the VGA Driver so that the game of pong can be displayed in 60 Hz refresh rate. By creating a process which switches
         logic every clock event, it divides the frequency of the internal clock of 50 MHZ to 25MHZ. Using an embedded board (Spartan-3E FPGA), made a vertical and horizontal
         pulse signal to properly display the screen in 60 Hz with resolution of 640 x 480. The Spartan-3E FPGA does not have an operating system so I took the video on a phone.
         The two players paddles are controlled by on board switches.`,
}
const jarkData = {
  title: "Jarknoid",
  video: "https://www.youtube.com/embed/1_43MkpMEbk",
  github: "https://github.com/HenryZou1/Jarknoid",
  body: `This application is a brick breaker game. I worked in a group of three to create
   this game. One person was in charge of the animations while I created the game engine
   and physics with my another member. The game was created using jpanel, keylistener, audioplayer
   and mouselistener. The player tries to hit all the bricks on the page and   
   the score board keeps track of their score.`,
}

const cameraData = {
  title: "Ping Pong Ball Detection",
  video: "https://www.youtube.com/embed/eCVxcNpz7TI",
  body: `This project was a robot to fetch the ping pong ball. I was responsible for the camera detection. I went and bought a raspberry pi 4 and 
  setup operating system on the raspberry pi (raspbian). I installed opencv on the raspberry pi. Using a python module and opencv library, I made
  an application to find the ping pong ball. To acheive this, I found the color range of the orange ball and match within the frame to get contours.
  Using the largest contour, I match the shape of a circle to it and if the circle is of a certain size then the ball gets detected. The center was
  printed out on the frame for display.`,
}


export default function About() {
 
  return (
    <div style={{ backgroundColor: "#000000", width: "100%", height: "100%" }}>
      <Header title="My Work" />
      <ProjectCard data={mentionData} />
      <ProjectCard data={cameraData} />
      <ProjectCard data={jpegData} />
      <ProjectCard data={peerData} />
      <ProjectCard data={vgaData} />
      <ProjectCard data={jarkData} />
    </div>
  )
}
