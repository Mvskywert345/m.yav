import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Syncspot from "../../Assets/Projects/4.png";
import RPS  from "../../Assets/Projects/3.png";
import FR from "../../Assets/Projects/1.png";
import catnoir from "../../Assets/Projects/2.png";
import music from "../../Assets/Projects/6.png";
import eventt from "../../Assets/Projects/5.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="pink">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RPS}
              isBlog={false}
              title="Rock-Paper-Scissors"
              description="A real-time multiplayer Rock Paper Scissors game built with Html-5, Node.js, Socket.io, and WebSockets. It features a modern UI, smooth gameplay, and instant opponent matching for an interactive gaming experience."
              ghLink="https://github.com/Mvskywert345/Multi-Player-Game-client"
              demoLink="https://chatify-49.web.app/"
                  className="bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Shadan-Music-Academy"
              description="A modern website for Sadan Music Classes, designed to showcase courses, schedules, and student performances. Built with React and Tailwind CSS, offering a responsive and user-friendly experience."
              ghLink="https://github.com/Mvskywert345/MusicClassWebsite"
              demoLink="https://shadanmusicacademy.netlify.app/"
              className="bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventt }
              isBlog={false}
              title="Roosevelt Events "
              description="My personal Event Managment Website , 
                           Roosevelt Events is a buitl platform for seamless planning and bookings. It offers a dynamic UI and efficient event handling for all occasions. 🚀   ."
              ghLink="https://github.com/Mvskywert345/Rooseveltevents"
              demoLink="https://rooseveltevents.netlify.app/"  
              className="bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={catnoir}
              isBlog={false}
              title="Asistant AI Cat_Noir"
              description="An AI-powered voice assistant built using Python. It can perform tasks, answer queries, control system functions, and assist users through voice commands, making daily interactions more efficient and seamless.

"
              ghLink="https://github.com/Mvskywert345/Cat_Noir-personal-AI"
              className="bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105"

              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FR}
              isBlog={false}
              title="Facial Recognition Music Recommender"
              description="A Python-based AI system that analyzes facial expressions and recommends music based on the detected mood. It uses computer vision to recognize emotions and suggests the perfect song to match the user's feelings, enhancing the listening experience."
              ghLink=""
              className="bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105"

            />
          </Col>

          <Col md={4} className="p-4">
  <ProjectCard
    imgPath={Syncspot}
    isBlog={false}
    title="Sync-spot"
    description="Built a Python program to automate the retrieval of user playlists using the Spotify API and OAuth 2.0 for secure authorization and access management."
    ghLink="https://github.com/Mvskywert345/SyncSpot"
    className="bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105"
  />
</Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
