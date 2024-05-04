import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
  SiAndroidstudio,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
       <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAdobeillustrator />
      </Col>
    </Row>
  );
}

export default Toolstack;
