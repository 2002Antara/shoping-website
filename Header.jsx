import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";

const Header = () => {
  const history = createBrowserHistory();

  const navigateTo = (route) => {
    history.push(route);
  };

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand onClick={() => navigateTo("/")}>
            Online Shop
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" ms-auto">
              <Nav.Link onClick={() => navigateTo("/cart")}>
                <i className="fa-solid fa-cart-shopping"></i>
                &nbsp; Cart
              </Nav.Link>
              <Nav.Link onClick={() => navigateTo("/signin")}>
                <i className="fa-solid fa-user"></i>
                &nbsp;Signin
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
