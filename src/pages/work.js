import React from "react"

import Header from "../components/header"
import ProjectCard from "../components/Projectcard"
import Tdcard from "../components/tdcard"
const fdmData = {
  title: "Consultant Service Portal",
  video: "https://www.youtube.com/embed/6PdqN2zBK5w",
  body: `During my tenure with FDM, I was working on their consultant service portal. The consultant service portal was an internal
  tool in which consultants can book training, get help from the admins and an attendance system. The consultant service portal
  was made with an angular front-end and Java Spring backend. While working on it, I was a team lead for ticketing system. We worked in
  an cross-functional team with business analyst, testers and developers in an agile methodology in which a sprint would last two weeks.
  The entire team would scope story and do story estimation in the beginning of the spring. After Business analyst would create wireframes
  for developers to follow. I would demonstrate the current progress of the project on a bi-weekly basis after the sprint to stakeholders.
  The ticketing system has automated emails which would be sent after specific state changes in a ticket. Also, it has a cron 
  job which counts the amount of completed tickets daily.`,
}
const tdData = {
  title: "Information Technology Consultant",
  body: `I was working as apart of TD's CORE banking L2 application support team. During my time at TD, TD was undergoing their 
  N.E.X.T evolution of work which lead to the organization restructure. During the restructor, our team was supporting over
  100 different application and later called SUN POD.As apart of the SUN POD, we were responsible for any application incidents
  that we got engage on either via servicenow portal or group email. Daily incidents examples are mainframe job failures,
  tibco file transfer failures, credit link system error, blueprisms disk usage.After I would determine the root cause of
  the incident using tools such as mainframe production environment's past job log, Tibco, CA-7, and serviceNow to search past 
  incidents/ defects with application/ change order for the application. After which I would apply the fix by either engage
  batch operations team, file transfer operations team, recycle servers, giving the user the workaround for the defect or 
  engage other teams for support via service now tasks. Also, responsible for service request such as extract reports for customer accounts 
  from the direct account system. For example, extracting a customer's finanical history, account statement query, 
  mobile transactions report. As team offer 24-h support 7 days a week, the team had a rotating shift system and we had to
  do handover meetings to the oversea singapore team during night.`,
}


export default function Work() {
  return (
    <div
      style={{ backgroundColor: "#000000", width: "100vw"}}
    >
      <Header />
      <title>Work</title>
      <ProjectCard data={fdmData} />
      <Tdcard data={tdData}></Tdcard>
    </div>
  )
}
