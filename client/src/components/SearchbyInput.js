import React, { useState } from "react";
import API from "../utils/API";
import ResultCard from "./ResultCard";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

function SearchbyInput() {
const [products, setProduct] = useState([]);
const [productSearch, setProductSearch] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    
    setProductSearch(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.fromInputBarcode(productSearch)
      .then((res) =>
        setProduct(res.data.products)
      )
      .catch((err) => console.log(err));
  };


console.log(products);


  return (
    <div>
      <Grid
        container
        spacing={12}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "50vh" }}
      >
        <Grid item xs={10} sm={6} lg={6}>
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

        <Grid item xs={6}>
          <Button
            size="md"
            variant="contained"
            color="primary"
            type="submit"
            className="button-block"
            onClick={handleFormSubmit}
          >
            Enter Barcode
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

export default SearchbyInput;
