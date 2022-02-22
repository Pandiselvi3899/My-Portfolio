import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import ResumePdf from "../../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={ResumePdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            {/* <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Team Leader of BookXchanger Project"
              date="January 2021 - May 2021"
              content={[
                "Manages all the major task like collecting the resources and ideas to the documentation part of the Project. And worked with team members to improve the features of website.",
                "Worked on different features of website and mostly the frontend part of BookXchanger website.",
              ]}
            /> */}
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="In School "
              content={[
                "Won several Singing competition at school.",
              ]}
            />
             <Resumecontent
              title=" In College "
              content={[
                "Placed Second at the College Level Art Competition.",
              ]}
            />
             <Resumecontent
              title="In School and College"
              content={[
                "Won Several Dance Events with School and College.",
              ]}
            />
             <Resumecontent
              title=" In College "
              content={[
                "Have Won Prize in Cooking Without Fire.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Full Stack Developer Course at GUVI "
              date="2021 - Present"
              content={[" "]}
            />
              <Resumecontent
              title="Theni Kammavar Sangam College of Technology "
              date="2016 - 2020"
              content={[" " ]}
            />
            <Resumecontent
              title="12th BOARD [Angoor Rowther Government Girls Higher Secondary School]"
              date="2014 - 2016"
              content={[" "]}
            />
            <Resumecontent
              title="10th BOARD [Angoor Rowther Government Girls Higher Secondary School] "
              date=" "
              content={[" "]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={ResumePdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
