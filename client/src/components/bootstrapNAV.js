import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class Navbar extends Component {
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
            redirectTo: "/profile",
          });
        }
      })
      .catch((error) => {
        console.log("Logout error");
      });
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log("navbar render, props: ");
    console.log(this.props);

    return (
      <div>
        {/* <header className="navbar App-header" id="nav-container">
          <div className="col-6"> */}
        {loggedIn ? (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/profile">
              DermPal
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <Link
                  to="/"
                  className="btn btn-link text-secondary"
                  onClick={this.logout}
                >
                  <span className="text-secondary abc">logout</span>
                </Link>

                <Link to="/profile" className="btn btn-link text-secondary">
                  <span className="text-secondary">Profile</span>
                </Link>
                <Link to="/search" className="btn btn-link">
                  <span className="text-secondary">search</span>
                </Link>
              </ul>
            </div>
          </nav>
        ) : (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
              Dermpal
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <Link to="/signup" className="btn btn-link">
                  <span className="text-secondary">sign up</span>
                </Link>

             
                <Link to="/login" className="btn btn-link text-secondary">
                  <span className="text-secondary">login</span>
                </Link>
              </ul>
            </div>
          </nav>
        )}
      </div>
      //     </header>
      //   </div>
    );
  }
}

export default Navbar;
