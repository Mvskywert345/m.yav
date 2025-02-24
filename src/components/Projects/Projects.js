import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/laptop.png";
import emotion from "../../Assets/laptop.png";
import editor from "../../Assets/laptop.png";
import chatify from "../../Assets/laptop.png";
import suicide from "../../Assets/laptop.png";
import bitsOfCode from "../../Assets/laptop.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Rock-Paper-Scissors"
              description="A real-time multiplayer Rock Paper Scissors game built with React, Node.js, Socket.io, and WebSockets. It features a modern UI, smooth gameplay, and instant opponent matching for an interactive gaming experience."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Shadan-Music-Academ"
              description="A modern website for Sadan Music Classes, designed to showcase courses, schedules, and student performances. Built with React and Tailwind CSS, offering a responsive and user-friendly experience."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor }
              isBlog={false}
              title="Roosevelt Events "
              description="My personal Event Managment Website , 
                           Roosevelt Events is a buitl platform for seamless planning and bookings. It offers a dynamic UI and efficient event handling for all occasions. 🚀   ."
              ghLink="https://github.com/Mvskywert345/Rooseveltevents"
              demoLink="https://rooseveltevents.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Asistant AI"
              description="An AI-powered voice assistant built using Python. It can perform tasks, answer queries, control system functions, and assist users through voice commands, making daily interactions more efficient and seamless.

"
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Facial Recognition Music Recommender"
              description="A Python-based AI system that analyzes facial expressions and recommends music based on the detected mood. It uses computer vision to recognize emotions and suggests the perfect song to match the user's feelings, enhancing the listening experience."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="File-Manager-For-PC "
              description="A Python-based automation tool that efficiently organizes and manages files by categorizing them based on type, date, or custom rules. It helps in keeping the system clutter-free by automatically sorting documents, images, videos, and other files into appropriate folders."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
