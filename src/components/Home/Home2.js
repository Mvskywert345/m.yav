import React from "react";
import Tilt from "react-parallax-tilt";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/brr.png";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaHackerrank } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="pink"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="pink"> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="pink">Web Technologies and Designing </b><br/>
                
                and also in areas related to{" "}
                <b className="pink">
                  3D and Metaverse.
                </b>
              </i>
              <br />
              <br />
              I love applying my passion for developing products
              with <b className="pink">Node.js</b> and <br/>
              <i>
                <b className="pink">
                  {" "}
                  Modern Javascript Libraries and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="pink"> React.js and Three.js</b>
              </i>
            </p>
          </Col>
        
          <Col md={4} style={{ paddingBottom: 10 ,  }}>
           <img
    src={homeLogo}
    className="avatar-container"
    alt="avatar"
    
    style={{
      width: "100%",
      height: "auto",
      maxHeight: "400px",
      borderRadius: "50%",
    }}  
  />
 


            </Col>
        </Row>
       
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="pink">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Mvskywert345"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
                 
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muskan-yadav-a66192225/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
             <a
             href="https://www.hackerrank.com/profile/muskanyadav12201"
             target="_blank"
            rel="noreferrer"
             className="icon-colour home-social-icons"
             >
            <FaHackerrank />
            </a>
            </li>
            <li className="social-icons">
             <a
                href="mailto:muskanyadav122003@gmail.com"
                target="_blank"
             rel="noreferrer"
             className="icon-colour home-social-icons"
            >
            <SiGmail />
            </a>
            </li>
           </ul>
          </Col>
        </Row>
      </Container>
      </Container>
   
  );
}
export default Home2; 