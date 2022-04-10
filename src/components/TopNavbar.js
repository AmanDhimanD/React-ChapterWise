import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const TopNavbar = (props) => {
  // const title = "RayneCoder"
  /* pass title in the same page and can pass by App.js tag as Title = ""*/
  return (
    <>
      <Navbar bg="danger" variant="dark" sticky="top">
        {/* bg -  is the color schemes */}
        {/* Variant - is the Font color */}
        {/* Sticky - Position the navbar at the top of the viewport, but only after scrolling past it. */}
        <Container>
          {/* <Container> component to center it on a page */}
          <Navbar.Brand>{props.title}</Navbar.Brand>
          {/* props.title pass title from the appjs page */}

          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavbar;
