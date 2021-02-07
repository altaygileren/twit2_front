import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../../../../utils/UserContext";
import Loading from "../../../../utils/Loading";
import Title from "../../comps/title";
import { Button, Form } from "react-bootstrap";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [oassword, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  return user ? (
    <div className="text-left">
      <Title title={user.username} />
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={user.email}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Bio</Form.Label>
          <Form.Control value={user.bio} as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <Button variant="primary" block>
        Update Profile
      </Button>
    </div>
  ) : (
    <Loading />
  );
};

export default Profile;
