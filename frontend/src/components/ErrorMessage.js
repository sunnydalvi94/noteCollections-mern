import React from "react";
import { Badge } from "react-bootstrap";

function ErrorMessage({ bg = "info", children }) {
  // 2nd props is children, component inside body
  return (
    <div className="text-center">
      <h4>
        {" "}
        <Badge bg={bg}>{children}</Badge>{" "}
      </h4>
    </div>
  );
}

export default ErrorMessage;
