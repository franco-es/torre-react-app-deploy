import React, { useEffect, useState } from "react";

// BOOTSTRAP
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";

// OWN IMPORTS
import getJobs from "../services/getJobs";
import getPeople from "../services/getPeople";

const List = (props) => {
  const [name] = useState(props.name);
  const [jobsArray, setJobsArray] = useState([]);
  const [peopleArray, setPeopleArray] = useState([]);
  const [minAmaunt, setMinAmaunt] = useState("");

  useEffect(() => {
    if (name === "jobs") {
      getJobsList();
    }
    if (name === "people") {
      getPeopleList();
    }
  }, []);

  const getJobsList = async () => {
    console.log("axios de " + name);
    await getJobs().then((jobs) => {
      setJobsArray(jobs);
    });
  };

  const getPeopleList = async () => {
    console.log("axios de " + name);
    await getPeople().then((people) => {
      setPeopleArray(people);
    });
  };

  return (
    <>
      {name === "jobs" ? (
        <>
          {jobsArray.map((job) => (
            <Card className="shadowStrength mx-3 mb-3 bg_row">
              <Card.Body>
                <>
                  <Row key={job.id} className="h-3-5">
                    <Col md={8}>{job.objective}</Col>
                    <Col md={4}>{job.type}</Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col>
                      <h6>Skills</h6>
                      {job.skills.slice(0, 2).map((skill) => (
                        <ul>
                          <li>
                            <b>Skill:</b> {skill.name}
                          </li>
                          <li>
                            <b>Experience:</b>
                            {skill.experience.replace("-", " ")}
                          </li>
                          <hr />
                        </ul>
                      ))}
                    </Col>
                    <Col>
                      <h6>Members</h6>
                      {job.members.slice(0, 2).map((member) => (
                        <>
                          <ul>
                            <li>
                              <b>Name: </b>
                              {member.name}
                            </li>
                            <li>
                              <b>job: </b>
                              {member.professionalHeadline}
                            </li>
                          </ul>
                          <hr />
                        </>
                      ))}
                    </Col>
                  </Row>
                </>
              </Card.Body>
            </Card>
          ))}
        </>
      ) : (
        <>
          {peopleArray.map((person) => (
            <Card className="shadowStrength mx-3 mb-3 bg_row">
              <Card.Body>
                <>
                  <Row key={person.id}>
                    <Col md={8} className="h-3-5">
                      {person.name}{" "}
                      {person.verified === true ? (
                        <i className="fas fa-user-check"></i>
                      ) : null}
                    </Col>
                    <Col md={4}>{person.professionalHeadline}</Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col>
                      <ul>
                        <h6>
                          <b>Open To:</b>
                        </h6>
                        {person.openTo.map((item) => (
                          <li>{item}</li>
                        ))}
                      </ul>
                    </Col>
                    <Col>
                      {person.skills.slice(0, 3).map((skill) => (
                        <>
                          <h6>
                            <b>Skills:</b>
                          </h6>
                          <ul>
                            <li>
                              <b>Skill:</b> {skill.name}
                            </li>
                            <li>
                              <b>Experience: </b>
                              {Math.round(
                                (skill.weight + Number.EPSILON) * 100
                              ) / 100}
                            </li>
                            <hr />
                          </ul>
                        </>
                      ))}
                    </Col>
                  </Row>
                </>
              </Card.Body>
            </Card>
          ))}
        </>
      )}
    </>
  );
};

export default List;
