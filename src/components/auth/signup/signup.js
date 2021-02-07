import React, { useState, useEffect, useContext } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import Err from "../../../utils/error";
import { registerUser, setToken } from "../../../utils";
import { UserContext } from "../../../utils/UserContext";
import { TokenContext } from "../../../utils/TokenContext";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  const { setUserToken } = useContext(TokenContext);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const signUpBtn = async () => {
    const data = {
      username,
      email,
      password,
    };
    if (password !== confirmPassword) {
      setErr(true);
      setErrMsg("Passwords don't match");
    }
    try {
      setErrMsg("");
      setErr(false);
      const submitInfo = await registerUser(data, "signup");
      setUser(submitInfo.data.user);
      setToken(submitInfo.data.token);
      setUserToken(submitInfo.data.token);
      // return history.push("/about-project");
    } catch (err) {
      console.log(err);
      setErr(true);
      setErrMsg(err.response.data.msg);
    }
  };

  return (
    <div className="text-left">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="email"
            placeholder="Enter username"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Group>
        <Button onClick={() => signUpBtn()} variant="primary" block>
          Submit
        </Button>
      </Form>
      {err && <Err msg={errMsg} />}
    </div>
  );
};

export default Signup;
