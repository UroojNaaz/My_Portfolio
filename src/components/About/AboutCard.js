import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Assalam- u -Alaikum ! Everyone,
           <br /> 
           I am <span className="purple"> Urooj Naz </span>
            from <span className="purple"> Karachi, Pakistan. </span>
            
            {/* I am currently employed as a software developer at Juspay.
            <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do! */}
            I am <span className="purple">Mern Stack Developer . </span> I have extensive experience and a firm grip over leading server-side and client-side languages and frameworks .
         
            I am expert <span className="purple"> Graphic Designer . </span> I am a creative person who likes designing.
           
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring about new Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Urooj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
