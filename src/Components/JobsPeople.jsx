import React, { useEffect, useState } from "react";
import Jobs from "./Jobs";
import People from "./People";
const JobsPeople = () => {
  return (
    <>
      <h2 className="box">Jobs & people</h2>
      <div className="row">
        <div className="col-6">
          <Jobs />
        </div>
        <div className="col-6">
          <People />
        </div>
      </div>
    </>
  );
};

export default JobsPeople;
