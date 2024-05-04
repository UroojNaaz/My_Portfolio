import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import todo from "../../Assets/Projects/leaf.png";
// import timer from "../../Assets/Projects/emotion.png";
// import bweb from "../../Assets/Projects/codeEditor.png";
// import rweb from "../../Assets/Projects/chatify.png";
// import pweb from "../../Assets/Projects/suicide.png";
import rbweb from "../../Assets/Projects/blog.png";

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
              imgPath={rbweb}
              isBlog={false}
              title="Business Research"
              description="Our business research landing page provides instant access to essential insights, market trends, and strategic tools, empowering professionals to make informed decisions swiftly. With a sleek design and intuitive layout, it's the gateway to unlocking the potential of your business in today's dynamic landscape."
              ghLink="https://github.com/UroojNaaz/Busniess.git"
              demoLink="https://uroojnaaz.github.io/Busniess/"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rbweb}
              isBlog={false}
              title="Research Landing Page"
              description="Our Research landing page provides instant access to essential insights, market trends, and strategic tools, empowering professionals to make informed decisions swiftly. With a sleek design and intuitive layout, it's the gateway to unlocking the potential of your business in today's dynamic landscape."
              ghLink="https://github.com/UroojNaaz/Busniess.git"
              demoLink="https://uroojnaaz.github.io/Busniess/"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rbweb}
              isBlog={false}
              title="To-do App"
              description="Our business research landing page provides instant access to essential insights, market trends, and strategic tools, empowering professionals to make informed decisions swiftly. With a sleek design and intuitive layout, it's the gateway to unlocking the potential of your business in today's dynamic landscape."
              ghLink="#"
              demoLink="https://uroojnaaz.github.io/JS-Assignment-5-Todo-App-/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rbweb}
              isBlog={false}
              title="Pomodoro App"
              description="Our business research landing page provides instant access to essential insights, market trends, and strategic tools, empowering professionals to make informed decisions swiftly. With a sleek design and intuitive layout, it's the gateway to unlocking the potential of your business in today's dynamic landscape."
              ghLink="#"
              demoLink="https://uroojnaaz.github.io/JS-Assignment-6-Pomodoro-App-//" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rbweb}
              isBlog={false}
              title="Voting System"
              description="Our business research landing page provides instant access to essential insights, market trends, and strategic tools, empowering professionals to make informed decisions swiftly. With a sleek design and intuitive layout, it's the gateway to unlocking the potential of your business in today's dynamic landscape."
              ghLink="https://github.com/UroojNaaz/JS-Assignment-4-voting-System-.git"
              demoLink="https://uroojnaaz.github.io/JS-Assignment-4-voting-System-/"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rbweb}
              isBlog={false}
              title="Blogging App"
              description="Our business research landing page provides instant access to essential insights, market trends, and strategic tools, empowering professionals to make informed decisions swiftly. With a sleek design and intuitive layout, it's the gateway to unlocking the potential of your business in today's dynamic landscape."
              ghLink="#"
              demoLink="#"  
                   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
