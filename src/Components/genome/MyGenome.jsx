import React, { useState, useEffect } from "react";
import axios from "axios";

// BOOTSTRAP
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// PERSONAL IMPORTS
import getUser from "../../services/getUser";

// import CardGenome from "./CardGenome";

const MyGenome = () => {
  const [username, setUsername] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [location, setLocation] = useState("");
  const [strengths, setStrenghts] = useState([]);
  const [interests, setInterests] = useState([]);

  const axiosProfile = async (e) => {
    e.preventDefault();
    await getUser(username)
      .then((res) => {
        console.log(res);
        setStrenghts(res.strengths);
        setName(res.person.name);
        setLocation(res.person.location.shortName);
        setProfession(res.person.professionalHeadline);
        setInterests(res.interests);
        setShowCard(true);
      })
      .catch((err) => console.log(err));
  };

  const hideCard = (e) => {
    e.preventDefault();
    setUsername("");
    setShowCard(false);
  };
  return (
    <>
      <div className="box">
        <Form className="form-username mb-5">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          {showCard === false ? (
            <button
              className="btn btn-primary"
              onClick={(e) => axiosProfile(e)}
            >
              <i class="fas fa-search">Search Profile</i>
            </button>
          ) : (
            <button className="btn btn-primary" onClick={(e) => hideCard(e)}>
              <i class="fas fa-search">Clear</i>
            </button>
          )}
        </Form>
      </div>
      {showCard === true ? (
        <Card className="mx-4 ProfileCard shadowStrength">
          <Card.Header className="profileName">{name}</Card.Header>
          <Card.Body>
            <Card.Title>{profession}</Card.Title>
            <Card.Subtitle>{location}</Card.Subtitle>
            <Row className="mt-2">
              {/* INTERESTS */}
              <Col sm={12} md={6} className="">
                <Card.Title>Interests</Card.Title>
                <Card.Text className="box">
                  <Row className="boxStrengths">
                    {interests.map((item) => (
                      <Col className="border strengthsHover" key={item.id}>
                        {item.name}
                      </Col>
                    ))}
                  </Row>
                </Card.Text>
              </Col>
              {/* STRENGHTS */}
              <Col sm={12} md={6} className="">
                <Card.Title>Strenghts</Card.Title>
                <Card.Text className="box">
                  <Row className="boxStrengths">
                    {strengths.map((item) => (
                      <Col
                        key={item.id}
                        xs={12}
                        sm={12}
                        md="auto"
                        className="border strengthsHover"
                      >
                        {item.name}
                      </Col>
                    ))}
                  </Row>
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ) : (
        <h3>Please type some username</h3>
      )}
    </>
  );
};

export default MyGenome;
