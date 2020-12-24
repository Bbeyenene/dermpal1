import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import HeroIMG from "../assets/heroimg.jpg";
import SearchIcon from "@material-ui/icons/Search";
import CropFreeIcon from "@material-ui/icons/CropFree";
import InfoIcon from "@material-ui/icons/Info";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";


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
    height: 300,
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
              <Box m={4} mt={6} mb={0} textAlign="center">
                <Typography variant="h1">
                  Scan and search skincare products
                </Typography>
              </Box>
              <Box m={4} mt={4} mb={0} textAlign="center">
                <Typography variant="h2">
                  Detect ingredients contained in skincare products and
                  determine if the product is a good fit for your skin.
                </Typography>
              </Box>
              <Box mt={5} mb={6} textAlign="center">
                <a href="/signup">
                  <Button
                    variant="contained"
                    color="secondary"
                    size="medium"
                    startIcon={<SearchIcon />}
                    to="/signup"
                  >
                    Let's get started
                  </Button>
                </a>
              </Box>
            </Paper>
          </Box>
        </Grid>

        {/* info section */}
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <Paper className={classes.infoPaper}>
              <Box m={2} mt={4} textAlign="center">
                <Typography variant="h1">How it works</Typography>
              </Box>

              <Box m={0} mt={1} mb={4} textAlign="center">
                <Typography variant="h2"></Typography>
              </Box>

              <Box m={1} mt={3} mb={6} textAlign="center">
                <Box item>
                  <Typography variant="h2">
                    Scan the barcode for any skincare product
                  </Typography>

                  <CropFreeIcon />
                </Box>

                <Box m={1} mt={4} mb={6} item>
                  <Typography variant="h2">
                    Learn more about the product and its skin compatibility
                  </Typography>
                  <InfoIcon />
                  <Box m={1} mt={4} mb={6} item>
                    <Typography variant="h2">
                      Save your favorite products to your profile
                    </Typography>
                    <AccountCircleIcon />
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <Paper className={classes.colorPaper}></Paper>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
