import React from "react";
import List from "./List";

const People = (props) => {
  const [name, setName] = React.useState("people");

  return (
    <>
      <div>
        <h3>list Compoents</h3>
      </div>
      <div>
        <List name={name} />
      </div>
    </>
  );
};

export default People;
