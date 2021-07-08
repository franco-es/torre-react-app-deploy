import React, { useEffect, useState } from "react";

// BOOTSTRAP
import Col from "react-bootstrap/Col";

// OWN IMPORTS
import Jobs from "./Jobs";
import People from "./People";
const JobsPeople = () => {
  return (
    <div className="bg_row">
      <h2 className="box">Jobs & people</h2>
      <div className="row">
        <Col sm={12} md={6}>
          <Jobs />
        </Col>
        <Col sm={12} md={6}>
          <People />
        </Col>
      </div>
    </div>
  );
};

export default JobsPeople;
