import React from "react";
import Title from "../../comps/title";
import { Row, Col, ListGroup } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Title title={"About"} />
      <p className="text-left">
        This is my spin of a Twitter clone. Twit. The tools used are as follows
        <hr />
        <br />
        <Row>
          <Col lg={6}>
            <h6>Frontend</h6>
            <ListGroup variant="flush">
              <ListGroup.Item>React</ListGroup.Item>
              <ListGroup.Item>React Bootstrap</ListGroup.Item>
              <ListGroup.Item>CSS</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={6}>
            <h6>Backend</h6>
            <ListGroup variant="flush">
              <ListGroup.Item>Node.JS</ListGroup.Item>
              <ListGroup.Item>Express</ListGroup.Item>
              <ListGroup.Item>MongoDB</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </p>
    </div>
  );
};

export default About;
