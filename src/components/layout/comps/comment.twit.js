import React, { useState, useEffect, useContext } from "react";
import { retrieveItems, createItem } from "../../../utils";
import { Button, Form, Row, Col } from "react-bootstrap";
import moment from "moment";
import { UserContext } from "../../../utils/UserContext";
const Commenttwit = ({ twit }) => {
  const { user } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const findComments = async () => {
      const find = await retrieveItems(`comments/${twit}`);
      setComments(find);
    };
    findComments();
  }, []);

  const submitCommentBtn = async () => {
    const data = { twit, comment };
    const submitComment = await createItem(data, "comments");
    setComments([...comments, submitComment]);
  };
  return (
    <div key={twit}>
      {comments.length > 0 ? (
        <Button onClick={() => setShow(!show)}>
          {show ? "Close" : "View"} Comments
        </Button>
      ) : null}
      {show ? (
        <div className="comments-div">
          {comments.map((comment) => (
            <div>
              {comment.user ? (
                <Row>
                  <Col lg={10} md={10} sm={10} xs={10}>
                    {comment.user.username}
                  </Col>
                  <Col lg={2} md={2} sm={2} xs={2}>
                    <span style={{ fontSize: "12px" }}>
                      {moment(comment.date).fromNow()}
                    </span>
                  </Col>
                </Row>
              ) : null}
              {comment.comment}
              <hr />
            </div>
          ))}
        </div>
      ) : null}
      {user ? (
        <>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Leave a comment</Form.Label>
            <Form.Control
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <div className="text-right">
            <Button onClick={() => submitCommentBtn()} size="sm">
              Comment
            </Button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Commenttwit;
