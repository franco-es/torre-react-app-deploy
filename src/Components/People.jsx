import React from "react";
import List from "./List";

const People = (props) => {
  const [name, setName] = React.useState("people");

  return (
    <>
      <div className="box">
        <h3>People</h3>
      </div>
      <div>
        <List name={name} />
      </div>
    </>
  );
};

export default People;
