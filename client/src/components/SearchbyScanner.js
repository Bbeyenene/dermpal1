import React, { useState } from "react";
import API from "../utils/API";
import ResultCard from "./ResultCard";
// import $ from "jquery";
import Quagga from "quagga";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";

///////// <------open SCANNER CODE /////////////////////

function SearchbyScanner() {
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
          constraints: {
            width: 480,
            height: 150,
            facingMode: "environment",
          },
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

  return (
    <div>
      <Grid
        container
        spacing={6}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "25vh" }}
      >
        <Grid item xs={6}>
          <div id="scanner-container"></div>
        </Grid>

        <Grid item xs={6}>
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


        {products.length ? (
          <Grid item xs={6}>
              {products.map(product => (
              <ResultCard
              
                id={product.id}
                title={product.product_name}
                subheader={product.manufacturer}
                image={product.images[0]}
                description={product.description}
              />
            ))}
          </Grid>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </Grid>
    </div>
  );
}


export default SearchbyScanner;