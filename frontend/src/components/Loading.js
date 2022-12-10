import Spinner from "react-bootstrap/Spinner";
import React from "react";

function Loading() {
  return (
    <div className="text-center">
      <Spinner
        as="span"
        animation="border"
        size="lg"
        role="status"
        aria-hidden="true"
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
}

export default Loading;
