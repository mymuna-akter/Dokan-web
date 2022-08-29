import React from "react";
import { Alert } from "react-bootstrap";

const PageHeader = ({title}) => {
  return (
    <div>
      <Alert variant="success">
        <h5>{title}</h5>
      </Alert>
    </div>
  );
};

export default PageHeader;
