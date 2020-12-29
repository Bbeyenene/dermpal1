import React, { useState } from "react";
import API from "../utils/API";
import ResultCard from "./ResultCard";
import Quagga from "quagga";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import "./scanner.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    justifyContent: "center",

    minHeight: 25,

    padding: 40,

    marginTop: 35,
  },
}));



function SearchbyScanner(props) {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  const [products, setProduct] = useState([]);
  // const [productSearch, setProductSearch] = useState("");
  var _scannerIsRunning = false;

  function startScanner() {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          numOfWorkers: navigator.hardwareConcurrency,
          target: document.querySelector("#scanner-container"),
          // constraints: {
          //   width: 350,
          //   height: 350,
          //   facingMode: "environment",
          // },
        },
        decoder: {
          readers: [
            "code_128_reader",
            "ean_reader",
            "ean_8_reader",
            "code_39_reader",
            "code_39_vin_reader",
            "codabar_reader",
            "upc_reader",
            "upc_e_reader",
            "i2of5_reader",
          ],
          debug: {
            showCanvas: true,
            showPatches: true,
            showFoundPatches: true,
            showSkeleton: true,
            showLabels: true,
            showPatchLabels: true,
            showRemainingPatchLabels: true,
            boxFromPatches: {
              showTransformed: true,
              showTransformedBox: true,
              showBB: true,
            },
          },
        },
      },
      function (err) {
        if (err) {
          console.log(err);
          return;
        }
        //console.log("Initialization finished. Ready to start");
        Quagga.start();

        // Set flag to is running
        _scannerIsRunning = true;
      }
    );

    Quagga.onDetected(function (result) {
      console.log("Barcode detected and processed : " + result.codeResult.code);
      var myBarcode = result.codeResult.code;
      alert(myBarcode);

      API.fromInputBarcode(myBarcode)
        .then((res) => setProduct(res.data.products))
        .catch((err) => console.log(err));
    });
  }

  function myRes() {
    if (_scannerIsRunning) {
      Quagga.stop();
    } else {
      startScanner();
    }
  }

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
      <Grid
        container
        spacing={4}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "90vh" }}
      >
        <Grid item xs={10}>
          <Paper className={classes.paper} elevation={3}>
            <Grid container spacing={4} justify="center">
              <Grid item>
                <div id="scanner-container"></div>
              </Grid>

              <Grid item xs={12}>
                <Button
                  id="btn"
                  variant="contained"
                  color="primary"
                  type="button"
                  className="button-block"
                  onClick={myRes}
                >
                  Start/Stop Scanner
                </Button>
              </Grid>

              <Grid item>
                <Link to="/searchbyinput"> OR TYPE IN BARCODE </Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {products.length ? (
          <Grid item xs={10}>
            {products.map((product) => (
              <ResultCard
                id={product.id}
                title={product.product_name}
                subheader={product.manufacturer}
                image={product.images[0]}
                description={product.description}
                username={props.username}
                // closeCard={handleClose}
              />
            ))}
          </Grid>
        ) : (
          <h3></h3>
        )}
      </Grid>
    </div>
  );
}

export default SearchbyScanner;
