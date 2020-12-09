import axios from "axios";

// const api_key = process.env.REACT_APP_GOOGLE_API_KEY;
// CORS Anywhere is a reverse proxy which adds CORS headers to the proxied request. 
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
// barcode Lookup gets product information, photos and stores pricing for millions of items worldwide
const barcodeUrl = "https://api.barcodelookup.com/v2/products?barcode=";

// put api key after &formatted=y&key=  

export default {
  fromInputBarcode: function (barcodeInput) {
    return axios.get(
      proxyUrl + barcodeUrl + barcodeInput + "&formatted=y&key=hrsh89sx6t7478jna9yf81jqmxbhke     "
    );
  },
};
