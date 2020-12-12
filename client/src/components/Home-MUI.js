import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import HeroIMG from "../assets/heroimg.jpg";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  

  hero: {
    height: 400,
    backgroundImage: `url(${HeroIMG})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    
  },

  aboutPaper: {
    backgroundColor: "#FFFEF2",
    height: 350,
    width: "100%",
  },

  infoPaper: {
    backgroundColor: "#F6EACB",
    height: 350,
    width: "100%",
  },
  colorPaper: {
    backgroundColor: "#A1B78F",
    height: 15,
    width: "100%",
  },

}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      
      {/* Hero  */}

      <Grid container>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <Paper className={classes.hero}>
              <Box m={2} mt={4} mb={6}>
                <Typography variant="h1">{/* How it works */}</Typography>
              </Box>
            </Paper>
          </Box>
        </Grid>

        {/* About */}

        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <Paper className={classes.aboutPaper}>
              <Box m={4} mt={4} mb={0}>
                <Typography variant="h1">
                  Scan and search skincare products
                </Typography>
              </Box>
              <Box m={4} mt={4} mb={0}>
                <Typography variant="h2">
                  detect ingredients contained in skincare products and
                  determine if the product is a good fit for your skin.
                </Typography>
              </Box>
              <Box mt={5} mb={6} textAlign="center">
                <Button
                  variant="contained"
                  href="/signup"
                  color="secondary"
                  size="medium"
                  startIcon={<SearchIcon />}
                >
                  Let's get started
                </Button>
              </Box>
            </Paper>
          </Box>
        </Grid>

       
     




        {/* info section */}
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <Paper className={classes.infoPaper}>
              <Box m={2} mt={4} textAlign="center">
                <Typography variant="h2">How it works</Typography>
              </Box>
              <Box m={0} mt={1} mb={6} textAlign="center">
                <Typography variant="h2"></Typography>
              </Box>
            </Paper>
          </Box>
        </Grid>


        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <Paper className={classes.colorPaper}>
       
            </Paper>
          </Box>
        </Grid>



      </Grid>
    </div>
  );
}
