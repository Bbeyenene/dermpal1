import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";
import { Nav, Navbar } from "react-bootstrap";
import "./bootstrapnav.css";


class BootstrapNavbar extends Component {
  constructor() {
    super();
    this.state = { redirectTo: null };
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/api/user/logout")
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null,
          });
          window.location.replace("/");
          this.setState({
            redirectTo: "/login",
          });
        }
      })
      .catch((error) => {
        console.log("Logout error");
      });
  }

  render() {
    const loggedIn = this.props.loggedIn;
    // console.log("navbar render, props: ");
    console.log(this.props);

    return (
      <div>
        {loggedIn ? (
          <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand eventKey="1" as={Link} to="/profile">
              DermPal
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link eventKey="2" as={Link} to="/search">
                  search
                </Nav.Link>
                <Nav.Link eventKey="3" as={Link} to="/profile">
                  profile
                </Nav.Link>
                <Nav.Link eventKey="4" as={Link} to="/" onClick={this.logout}>
                  logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        ) : (
          <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand eventKey="1" as={Link} to="/">
              DermPal
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link eventKey="2" as={Link} to="/login">
                  login
                </Nav.Link>
                <Nav.Link eventKey="3" as={Link} to="/signup">
                  sign up
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )}
      </div>
    );
  }
}

export default BootstrapNavbar;
