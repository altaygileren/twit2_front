import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./footer.style.css";

const Footer = () => {
  return (
    <div className="footer-div">
      <Row>
        <Col lg={4}>
          <Link to="/about-project">About</Link>
        </Col>
        <Col lg={4}>
          <a href="http://www.erenwebdev.com" target="_blank">
            Portfolio
          </a>
        </Col>
        <Col lg={4}>
          <a href="erenaltaygil@gmail.com">Email</a>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
