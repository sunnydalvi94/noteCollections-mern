import React from "react";
import { Container, Navbar, Nav, Form, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to={"/"}>
              {" "}
              <h4>NoteCollection</h4>
            </Link>

            <b></b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex py-2 m-auto">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Nav
              className=" my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link to={"/MyNotes"}>
                  <strong>My Notes</strong>
                </Link>
              </Nav.Link>
              <NavDropdown title="Sunny Dalvi" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
