import React, { useState, useEffect } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import getUser from "../../services/getUser";

// import CardGenome from "./CardGenome";

const MyGenome = () => {
  const [username, setUsername] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [name, setName] = useState("");
  const [userImg, setUserImg] = useState("");
  const [profession, setProfession] = useState("");

  const axiosProfile = async (e) => {
    e.preventDefault();
    console.log(username);
    await getUser(username)
      .then((res) => {
        console.log(res);
        setName(res.person.name);
        axios({
          method: "GET",
          url: res.person.picture,
          "Content-Type": "image/jpeg",
        }).then((res) => {
          setUserImg(res.data);
        });
        setProfession(res.person.professionalHeadline);
        setShowCard(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="box">
        <Form className="form-username">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <button className="btn btn-primary" onClick={(e) => axiosProfile(e)}>
            {showCard === true ? (
              <i class="fas fa-search">Clear</i>
            ) : (
              <i class="fas fa-search">Search Profile</i>
            )}
          </button>
        </Form>
      </div>
      {showCard === true ? (
        <Card className="mt-5 mx-4">
          <Card.Header className="profileName">
            {name} <img src={userImg} alt="" />
          </Card.Header>
          <Card.Body>
            <Card.Title>{profession}</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ) : (
        <h3>Please type some username</h3>
      )}
    </>
  );
};

export default MyGenome;
