import React, { useEffect, useState } from "react";
import List from "./List";

const Jobs = () => {
  const [name, setName] = useState("jobs");

  return (
    <>
      <div className="box">
        <h3>Jobs</h3>
      </div>
      <div>
        <List name={name} />
      </div>
    </>
  );
};

export default Jobs;
