import React, { useState, useEffect, useContext } from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import moment from "moment";
import FadeIn from "react-fade-in";
import Commenttwit from "../comps/comment.twit";
import { UserContext } from "../../../utils/UserContext";
import Loading from "../../../utils/Loading";

const Mostrecenttwits = ({ twits }) => {
  const { user } = useContext(UserContext);
  return (
    <div>
      {twits.map((twit, i) => (
        <FadeIn delay={10 * i}>
          <Card key={twit._id}>
            <Card.Body>
              <Card.Title>
                <Row>
                  <Col lg={10} md={10} sm={10} xs={10}>
                    {twit.user.username}
                  </Col>
                  <Col lg={2} md={2} sm={2} xs={2}>
                    <span style={{ fontSize: "12px" }}>
                      {moment(twit.date).fromNow()}
                    </span>
                  </Col>
                </Row>
                <hr />
              </Card.Title>
              <Card.Text>{twit.post}</Card.Text>
              <Commenttwit twit={twit._id} />
            </Card.Body>
          </Card>
        </FadeIn>
      ))}
    </div>
  )
};

export default Mostrecenttwits;
