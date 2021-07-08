import React, { useEffect, useState } from "react";

// BOOTSTRAP
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
      <div className="box"></div>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {name === "jobs" ? (
          <tbody>
            {jobsArray.map((job) => (
              <>
                <tr key={job.id}>
                  <td>
                    <Row>
                      <Col md={8}>{job.objective}</Col>
                      <Col md={4}>{job.type}</Col>
                    </Row>
                    <hr />
                    <Row>
                      <Col>
                        <ul>
                          <li>min: </li>
                          <li>max:</li>
                          <li></li>
                        </ul>
                      </Col>
                      <Col>
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
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        ) : (
          <tbody>
            {peopleArray.map((person) => (
              <>
                <tr key={person.id}>
                  <td>
                    <Row>
                      <Col md={8}>
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
                          <b>Open To:</b>
                          {person.openTo.map((item) => (
                            <li>{item}</li>
                          ))}
                        </ul>
                      </Col>
                      <Col>
                        {person.skills.slice(0, 3).map((skill) => (
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
                        ))}
                      </Col>
                      <Col>
                        {/* {people.members.slice(0, 2).map((member) => (
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
                        ))} */}
                      </Col>
                    </Row>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        )}
      </Table>
    </>
  );
};

export default List;
