import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="pink">Muskan Yadav </span> 
            from <span className="pink"> UttarPradesh, India.</span>
            <br />
            A MERN Stack Developer Intern at MNNLR Pvt. Ltd.
            <br />
            I completed my BCA in 2024.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Desining 
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
          </ul>

          <p style={{ color: "#501944" }}>
          I live by the motto:
          “Let’s try—what if?”{" "}
          </p>
          <footer className="blockquote-footer">Muskan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
