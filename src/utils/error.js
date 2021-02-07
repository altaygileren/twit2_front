import React from "react";
import { Alert } from "react-bootstrap";

const Error = ({ msg }) => {
  return (
    <div className="err-msg text-center">
      <Alert variant={"danger"}>{msg}</Alert>
    </div>
  );
};

export default Error;
