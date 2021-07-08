import React, { useState, useEffect } from "react";
import axios from "axios";

// BOOTSTRAP
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import ProgressBar from "react-bootstrap/ProgressBar";
import ListGroup from "react-bootstrap/ListGroup";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// PERSONAL IMPORTS
import getUser from "../../services/getUser";

// import CardGenome from "./CardGenome";

const MyGenome = () => {
  const [username, setUsername] = useState("");
  const [showCard, setShowCard] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [location, setLocation] = useState("");
  const [strengths, setStrenghts] = useState([]);
  const [interests, setInterests] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [personality, setPersonality] = useState([]);

  const axiosProfile = async (e) => {
    e.preventDefault();
    setLoading(true);
    await getUser(username)
      .then((res) => {
        setLoading(false);
        setStrenghts(res.strengths);
        setName(res.person.name);
        setLocation(res.person.location.shortName);
        setProfession(res.person.professionalHeadline);
        setInterests(res.interests);
        // saveInterests(interests);
        setLanguages(res.languages);
        setPersonality(res.personalityTraitsResults);
        setShowCard(true);
      })
      .catch((err) => console.log(err));
  };

  // const saveInterests = async (interests) => {
  //   console.log(interests);
  //   let interesSave = {};
  //   const SavedInterests = [];
  //   interests.forEach((interest) => {
  //     interesSave = {
  //       id: interest.id,
  //       code: interest.code,
  //       name: interest.name,
  //       media: interest.media,
  //       created: interest.created,
  //     };
  //     SavedInterests.push(...interesSave);
  //   });
  //   console.log(SavedInterests);
  // };

  const hideCard = (e) => {
    e.preventDefault();
    setUsername("");
    setShowCard(false);
  };
  return (
    <div className="bg_row">
      <div className="box">
        <Form className=" bg_white form-username mb-5 px-4 py-4 shadowStrength borderRadius-1 mt-sm-5">
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
              <i class="fas fa-search"></i> Search Profile
            </button>
          ) : (
            <button className="btn btn-primary" onClick={(e) => hideCard(e)}>
              <i class="fas fa-times"></i> Clear
            </button>
          )}
        </Form>
      </div>
      {loading ? (
        <Spinner animation="border" variant="success" className="box" />
      ) : null}

      {showCard === true ? (
        <Card className="mx-4 ProfileCard shadowStrength mb-5">
          <Card.Header className="profileName">{name}</Card.Header>
          <Card.Body>
            <Card.Title>{profession}</Card.Title>
            <Card.Subtitle>{location}</Card.Subtitle>
            <Row className="mt-2">
              {/* INTERESTS */}
              <Col sm={12} md={6} className="mt-4 px-5">
                <Card.Title>Interests</Card.Title>
                <hr width="100%" />
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
              <Col sm={12} md={6} className="mt-4 px-5">
                <Card.Title>Strenghts</Card.Title>
                <hr width="100%" />
                <Card.Text className="box">
                  <Row className="boxStrengths">
                    {strengths.map((item) => (
                      <Col
                        key={item.id}
                        xs={12}
                        sm={6}
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

            <Row>
              {/* LANGUAGES */}
              <Col className="mt-4 px-5">
                <Card.Title>Languages</Card.Title>
                <hr width="100%" />
                <Card.Text className="box">
                  <Row className="boxStrengths">
                    <ListGroup horizontal className="mt-4">
                      <Col className="my-sm-2 ">
                        {languages.map((item) => (
                          <ListGroup.Item className="align-left">
                            <ul key={item.code}>
                              <li>
                                <b>Code:</b>
                                {item.code}
                              </li>
                              <li>
                                <b>Language:</b>
                                {item.language}
                              </li>
                              <li>
                                <b>Fluency:</b>
                                {item.fluency}
                              </li>
                            </ul>
                          </ListGroup.Item>
                        ))}
                      </Col>
                    </ListGroup>
                  </Row>
                </Card.Text>
              </Col>
              {/* personality */}
              <Col className="mt-4 px-5">
                <Card.Title>Personality</Card.Title>
                <hr width="100%" />
                <div className="box">
                  <Row className="boxStrengths tablePersonality">
                    <Table>
                      <thead>
                        <tr>
                          <th></th>
                          <th colspan="12">
                            <b>Name:</b>
                          </th>
                          <th colspan="12">
                            <b>Score: 0-4</b>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {personality.analyses.map((item) => (
                          <tr key={item.groupId}>
                            <td></td>
                            <td colspan="12">
                              {item.groupId.replace("-", " ")}
                            </td>
                            <td colspan="12">
                              <ProgressBar
                                now={item.analysis}
                                label={`${item.analysis}`}
                                max={4}
                                min={0}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Row>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ) : null}
    </div>
  );
};

export default MyGenome;
