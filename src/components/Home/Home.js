import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/brr.png"; // This line is commented out, and it's fine if you don't use the image
import myImg from "../../Assets/m-11.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="wave emoji">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MUSKAN YADAV</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={4} style={{ paddingBottom: 20 }}>
            <Tilt
  className="tilt-container"
  tiltMaxAngleX={15}
  tiltMaxAngleY={15}
  glareEnable={true}
  glareMaxOpacity={0.45}
  scale={1.1}
  style={{
    width: "100%",
    maxWidth: "350px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>       
  <img
    src={myImg}
    className="avatar-img"
    alt="avatar"
    style={{
      width: "150%",
      height: "300",
      maxHeight: "400px",
      borderRadius: "50%",
    }}
  />
</Tilt>

            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
