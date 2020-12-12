import React, { Component } from "react";
import API from "../utils/API";
import Results from "./member";

class Profile extends Component {
    state = {
        savedProducts: [],
    }

    componentDidMount() {
        API.retrievProduct()
            .then(savedProducts => this.setState({ savedProducts: savedProducts }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="container">
                <h2>Saved Products</h2>
                <Results products={this.state.savedProducts} />
            </div>
        )
    }
}

export default Profile;