import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Avinash Gurugubelli </span>
            from <span className="purple"> Vizianagaram, India.</span>
            <br /> I am a currently pursuing my BTech final year at Lendi college
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> surfing new gadgets
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive for progress every day!"{" "}
          </p>
          <footer className="blockquote-footer">Avinash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
