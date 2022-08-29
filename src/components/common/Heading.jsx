import React from "react";

const Heading = ({ title }) => {
  return (
    <div>
      <div className="alert alert-light border-secondary" role="alert">
        <strong>{title}</strong>
      </div>
    </div>
  );
};

export default Heading;
