import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="loading-div-style">
      <Spinner size="lg" animation="border" role="status">
      </Spinner>
    </div>
  );
};

export default Loading;
