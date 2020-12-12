import React, { useState } from "react";
import API from "../utils/API";
import ResultCard from "./ResultCard";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

function SearchbyInput() {
  const [products, setProduct] = useState([]);
  const [productSearch, setProductSearch] = useState("");

  // useEffect(() => {
  //   if (products.length) {

  //     recommendProduct();

  //   }

  // }, [products]);

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
  function recommendProduct() {
    const drySkinCriteria = ["hydrating", "hydration", "dry skin", "moisture", "moisturization", "intense moisture", "moisturizing"];
    const oilSkinCriteria = ["oily skin", "control oiliness", "oiliness", "acne", "oily", "oily t-zone"];
    const allSkinCriteria = ["all skin types", "all skin", "combination", "normal"];

    console.log(products[0].description.split(" "), "hello");

    const arrayofWords = products[0].description.split(" ");
    
    let drycounter = 0;
    let oilcounter =0;
    let allskincounter =0;
    for (let i =0; i<arrayofWords.length; i++){
    
      var word = arrayofWords[i];
      if (drySkinCriteria.includes(word)){
        drycounter++
      }else if(oilSkinCriteria.includes(word)){
        oilcounter++
      }else if(allSkinCriteria.includes(word)){
        allskincounter++
      }
    
    }
   console.log("oily" , oilcounter);
   console.log("dry", drycounter);
   console.log("all skin types", allskincounter)


  }

 
  // console.log(products);


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