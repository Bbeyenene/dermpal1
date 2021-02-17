import axios from "axios";

// const REACT_APP_API_KEY = process.env.API_KEY;06827465
const proxyUrl =
  "https://cors-anywhere.herokuapp.com/https://api.barcodelookup.com/v2/products?barcode=";

var API = {
  fromInputBarcode: (barcodeInput) => {
    return axios.get(
      proxyUrl +
        barcodeInput +
        "&formatted=y&key=hrsh89sx6t7478jna9yf81jqmxbhke"
    );
  },
  postProduct: (newProduct) => {
    return axios
      .post("/api/product/", newProduct)
      .then((result) => result.data);
  },

  retrieveProduct: () => {
    return axios.get("/api/product/all");
  },
  memberInfo: () => {
    return axios.get("/api/user/member").then((res) => console.log(res));
  },
};
export default API;
