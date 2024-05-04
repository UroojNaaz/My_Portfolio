import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import {
  SiFirebase,
  // SiNextdotjs,
  SiExpress,
  SiSolidity,
  SiBootstrap,
  SiTailwindcss,
  SiDart,
  SiFlutter,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiDart /> 
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <DiHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <DiCss3 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
       <SiBootstrap />
       </Col>

       <Col xs={4} md={2} className="tech-icons">
       <SiTailwindcss />
       </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
    
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col> */}
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SiExpress />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
    </Row>
  );
}

export default Techstack;
