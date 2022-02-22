import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pandi Selvi </span>
            from <span className="purple"> Cumbum,Theni</span>
            <br />I have just completed MERN Stack at Guvi Geek Networks,IITM Research Park,Chennai. I'm{" "}
            <b className="purple"> Web Developer</b> and I love to create
            <b className="purple"> Web Apps </b>that would make life easy and enjoyable.I'm enthusiastic about learning <b className="purple"> New Skills.</b>
            <br />I am looking forward to gain competency and exposure in{" "}
            <b className="purple">
              Web development. </b>In my free time you can find me learning new things and practice coding.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#14FFEC", opacity: 0.7 }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
