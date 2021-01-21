import React, { useState, useEffect } from "react";
import API from "../utils/API";
import ResultCard from "./ResultCard";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    justifyContent: "center",

    minHeight: 25,

    padding: 70,

    marginTop: 35,
  },
}));

function SearchbyInput(props) {
  const [products, setProduct] = useState([]);
  const [productSearch, setProductSearch] = useState("");
  // const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  useEffect(() => {
    if (products.length) {
      recommendProduct();
    }
  }, [products]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setProductSearch(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.fromInputBarcode(productSearch)
      .then((res) =>
        setProduct(res.data.products)(console.log(res.data.products))
      )
      .catch((err) => console.log(err));
  };

  function recommendProduct() {
    const drySkinCriteria = [
      "hydrating",
      "hydration",
      "dry skin",
      "moisture",
      "moisturization",
      "intense moisture",
      "moisturizing",
    ];
    const oilSkinCriteria = [
      "oily skin",
      "control oiliness",
      "oiliness",
      "acne",
      "oily",
      "oily t-zone",
    ];
    const allSkinCriteria = [
      "all skin types",
      "all skin",
      "combination",
      "normal",
    ];

    console.log(products[0].description.split(" "), "hello");

    const arrayofWords = products[0].description.split(" ");

    let drycounter = 0;
    let oilcounter = 0;
    let allskincounter = 0;
    for (let i = 0; i < arrayofWords.length; i++) {
      var word = arrayofWords[i];
      if (drySkinCriteria.includes(word)) {
        drycounter++;
      } else if (oilSkinCriteria.includes(word)) {
        oilcounter++;
      } else if (allSkinCriteria.includes(word)) {
        allskincounter++;
      }
    }
    console.log("oily", oilcounter);
    console.log("dry", drycounter);
    console.log("all skin types", allskincounter);
  }



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
          <Paper className={classes.paper} elevation={5}>
            <Grid container spacing={4} justify="center">
              <Grid item xs={12} sm={12} lg={12}>
                <TextField
                  placeholder="barcode #"
                  fullWidth
                  name="ProductSearch"
                  variant="outlined"
                  autoFocus
                  value={productSearch}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item>
                <Button
                  size="medium"
                  variant="contained"
                  color="primary"
                  type="submit"
                  className="button-block"
                  onClick={handleFormSubmit}
                >
                  Enter Barcode
                </Button>
              </Grid>

              <Grid item>
                <Link to="/profile"> GO TO PROFILE </Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {products.length ? (
          <Grid item xs={10} s={11} md={12}>
            {products.map((product) => (
              <ResultCard
                id={product.id}
                title={product.product_name}
                subheader={product.manufacturer}
                image={product.images[0]}
                description={product.description}
                category={product.category}
                username={props.username}
                // onDelete={handleDelete}
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

export default SearchbyInput;
