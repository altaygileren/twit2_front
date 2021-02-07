import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Err from "../../../utils/error";
import Loading from "../../../utils/Loading";
import { createItem, retrieveItemsAuth } from "../../../utils";
import Mostrecenttwits from "../comps/most.recent.twits";

const Userhome = () => {
  const [charCounter, setCharCounter] = useState(0);
  const [post, setPost] = useState("");
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [twits, setTwits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const findTwits = async () => {
      try {
        const find = await retrieveItemsAuth("twits");
        setTwits(find);
        setLoading(false);
      } catch (err) {
        setErr(true);
        setErrMsg(err.response.data.msg);
      }
    };
    findTwits();
  }, []);

  useEffect(() => {
    setCharCounter(post.length);
  }, [post]);

  const submitTwitBtn = async () => {
    const data = { post };
    try {
      const submitTwit = await createItem(data, "twits");
      setTwits([submitTwit, ...twits]);
    } catch (err) {
      setErr(true);
      setErrMsg(err.response.data.msg);
    }
  };

  return !loading ? (
    <div>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <div className="text-left">
          <Form.Label>What's on your mind?</Form.Label>
        </div>
        <Form.Control
          onChange={(e) => setPost(e.target.value)}
          maxLength="200"
          as="textarea"
          rows={3}
        />
      </Form.Group>
      <Row>
        <Col lg={6}>
          <div className="text-left">
            <h6 className={charCounter < 190 ? "" : "danger-color"}>
              {charCounter}/200
            </h6>
          </div>
        </Col>
        <Col lg={6}>
          <div className="text-right">
            <Button onClick={() => submitTwitBtn()}>Submit</Button>
          </div>
        </Col>
      </Row>
      <hr />
      <Mostrecenttwits twits={twits} />
    </div>
  ) : (
    <Loading />
  );
};

export default Userhome;
