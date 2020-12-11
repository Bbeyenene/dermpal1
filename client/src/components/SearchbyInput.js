import React, { useState } from "react";
import API from "../utils/API";
import ResultCard from "./ResultCard";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function SearchbyInput() {
  const classes = useStyles();

  const [products, setProduct] = useState([]);
  const [productSearch, setProductSearch] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleInputChange = (event) => {
    const { value } = event.target;

    setProductSearch(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
    API.fromInputBarcode(productSearch)
      .then((res) => setProduct(res.data.products))
      .catch((err) => console.log(err));
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <Grid item xs={12}>
            {products.map((product) => (
              <Modal
                open={open}
                // onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className={classes.modal}
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <ResultCard
                    id={product.id}
                    title={product.product_name}
                    subheader={product.manufacturer}
                    image={product.images[0]}
                    description={product.description}
                    closeModal={handleClose}
                    
                  />
                </Fade>
              </Modal>
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
