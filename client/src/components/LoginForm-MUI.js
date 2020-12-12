import React from "react";
import { Redirect } from 'react-router-dom'
import {
  Button,
  TextField,
  Grid,
  Paper,
  Typography,
  Link,
} from "@material-ui/core";
import axios from "axios";

class Loginmock extends React.Component {
  constructor() {
    super();
    this.state = { username: "", password: "", redirectTo: null };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");

    axios
      .post("api/user/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => {
        console.log("login response: ");
        console.log(JSON.parse(response.config.data).username);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: JSON.parse(response.config.data).username,
          });
          // update the state to redirect to home
          // remember to redirect to search page

          this.setState({
            redirectTo: "/profile",
          });
        }
      })
      .catch((error) => {
        console.log("login error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          <Grid container spacing={0} justify="center" direction="row">
            <Grid item>
              <Grid
                container
                direction="column"
                justify="center"
                spacing={2}
                className="login-form"
              >
                <Paper
                  variant="elevation"
                  elevation={2}
                  className="login-background"
                >
                  <Grid item>
                    <Typography component="h1" variant="h5">
                      Log In
                    </Typography>
                  </Grid>
                  <Grid item>
                    <form >
                      <Grid container direction="column" spacing={2}>
                        <Grid item>
                          <TextField
                            type="email"
                            placeholder="Email"
                            fullWidth
                            name="username"
                            variant="outlined"
                            value={this.state.username}
                            onChange={this.handleChange}
                            required
                            autoFocus
                          />
                        </Grid>
                        <Grid item>
                          <TextField
                            type="password"
                            placeholder="Password"
                            fullWidth
                            name="password"
                            variant="outlined"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                          />
                        </Grid>
                        <Grid item>
                          <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className="button-block"
                            onClick={this.handleSubmit}
                          >
                            Submit
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      Forgot Password?
                    </Link>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}
export default Loginmock;