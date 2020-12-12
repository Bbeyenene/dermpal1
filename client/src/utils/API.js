import axios from "axios";

// const REACT_APP_API_KEY = process.env.API_KEY;
 const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const barcodeUrl = "https://api.barcodelookup.com/v2/products?barcode=";

export default {
  fromInputBarcode: function (barcodeInput) {
     return axios.get(
      proxyUrl + barcodeUrl + barcodeInput + "&formatted=y&key="
    );
  },
};
