import React, { Component } from "react";
import API from "../utils/API";
import Member from "./member";
import axios from "axios";

//main profile page
class Profile extends Component {
  //   state = {
  //     savedProducts: [],
  //   };

  

  componentDidMount() {
    axios
      .get("/api/products/all")
      .then(function (response) {
        console.log(response.data[0].title);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="container">
        <h2>Saved Products</h2>

        {/* <Member products={this.state.savedProducts} /> */}
      </div>
    );
  }
}

export default Profile;
