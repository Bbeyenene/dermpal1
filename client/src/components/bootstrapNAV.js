import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

class BootstrapNavbar extends Component {
  constructor() {
    super();
    // this.state = { redirectTo: null };
    // this.logout = this.logout.bind(this);
  }

//   logout(event) {
//     event.preventDefault();
//     console.log("logging out");
//     axios
//       .post("/api/user/logout")
//       .then((response) => {
//         console.log(response.data);
//         if (response.status === 200) {
//           this.props.updateUser({
//             loggedIn: false,
//             username: null,
//           });
//           window.location.replace("/");
//           this.setState({
//             redirectTo: "/profile",
//           });
//         }
//       })
//       .catch((error) => {
//         console.log("Logout error");
//       });
//   }

  render() {
    // const loggedIn = this.props.loggedIn;
    // console.log("navbar render, props: ");
    // console.log(this.props);

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
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
            {/* {loggedIn ? ( */}
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/signup">
                    signup
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    login
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/signup">
                    signup
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    login
                  </a>
                </li>
              </ul>
            {/* )} */}
          </div>
        </nav>
      </div>
    );
  }
}

export default BootstrapNavbar;
