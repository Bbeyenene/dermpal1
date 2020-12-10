import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import useStyles from "./Home-styles"



export default function Home() {
  const classes = useStyles();

  return (
    //hero image
    <div className={classes.root}>
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.HeroImage}></Paper>
        </Grid>
      </Grid>

      {/* about section */}
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.aboutSection}>
            <Typography variant="h6">
              <Box textAlign="left" m={4}>
                Scan and detect ingredients contained in skincare products and
                determine if the product is a good fit for your skin.
              </Box>
            </Typography>

            <Box textAlign="center" m={1}>
              <Button variant="contained" href="/signup" color="primary">
                Let's get started
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* info section */}
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.profileSection}>
            <Typography>~How it works~</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
