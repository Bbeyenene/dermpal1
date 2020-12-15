import React, { Component } from "react";
import axios from "axios";
import SignupForm from "./components/SignupForm-MUI";
import LoginForm from "./components/LoginForm-MUI";
import Home from "./components/Home-MUI";
import SearchPage from "./components/Searchpage";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import Profile from "./components/Profile";
import BootstrapNavbar from "./components/BootstrapNavbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios
      .get("/api/user/")
      .then((response) => {
        console.log("Get user response: ");

        if (response.data.user) {
          console.log(
            "Get User: There is a user saved in the server session: "
          );

          this.setState({
            loggedIn: true,
            username: response.data.user.username,
          });
        } else {
          console.log("Get user: no user");
          this.setState({
            loggedIn: false,
            username: null,
          });
        }
      })
      .catch((err) => console.log("err", err));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <ThemeProvider theme={theme}>
            <BootstrapNavbar
              updateUser={this.updateUser}
              loggedIn={this.state.loggedIn}
              currentUser={this.state.username}
            />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signup" render={() => <SignupForm />} />
              <Route
                path="/login"
                render={() => <LoginForm updateUser={this.updateUser} />}
              />
              <Route path="/search" render={() => <SearchPage />} />
              <Route path="/profile" render={() => <Profile />} />
            </Switch>
          </ThemeProvider>
        </div>
      </Router>
    );
  }
}

export default App;
