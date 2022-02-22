import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import pizza from "../../Assets/Projects/pizza.jpeg";
import shop from "../../Assets/Projects/shop.jpeg";
import bus from "../../Assets/Projects/bus.jpeg";
import chat from "../../Assets/Projects/chat.jpeg";
import book from "../../Assets/Projects/book.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pizza}
              title="PIZZA CORNER"
              description="It is a Pizza delivery web app which allows you to select your favourite pizza.Add to Cart your pizzas and place your orders in online"
              link="https://piz-corner.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              title="SHOPIFY"
              description="It is a E-commerce Shopping app.Add to Cart your products,Order your Favourite dresses, Electoric items and Fashion accessories."
              link="https://selvi-shopify.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bus}
              title="BUS TICKET BOOKING APP"
              description="This App is used for booking your tickets to travel your favourite places. List of cities for users to choose from starting city and destination city."
              link="https://trusting-bardeen-717927.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              title="WETALK"
              description="It is a Full Stack Real time Chatting App.We have one on one chat as well as group chatting functionality in this app.Chat with your loved one."
              link="https://ps-we-chat.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={book}
              title="BOOK KEEPING APP"
              description=" This App is Similar to the library management system. It is designed to maintain the database of users and books."
              link="https://bk-ps.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
