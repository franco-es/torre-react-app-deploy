import React from "react";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavigationBar = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Link to="/" className="navbar-brand ">
            Torre
          </Link>
          <Nav className="justify-content-end">
            <Nav.Item>
              <NavLink className="btn  mr-1 " to="/" exact>
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="btn mr-1 " to="/me">
                My Genome
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="btn mr-1 " to="/jobsPeople">
                Jobs and People
              </NavLink>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default withRouter(NavigationBar);
