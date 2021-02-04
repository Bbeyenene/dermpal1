import React from "react";
// import axios from "axios";
import API from "../utils/API";
import "./profile.css";

export default class Profile extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    API.retrieveProduct()
      .then((savedProducts) => {
        // console.log("retrieveProducts:", savedProducts.data);
        this.setState({ products: savedProducts.data });
      })
      .catch((err) => console.error(err));
  }

  // removes products
  // handleRemove(product) {
  //   API.deleteProduct(product)
  //     .then((delProduct) =>
  //       this.setState({
  //         products: this.state.products.filter(
  //           (product) => product._id !== delProduct._id
  //         ),
  //       })
  //     )
  //     .catch((err) => console.error(`this is --->${err}`));
  // }

  render() {
    return (
      <div className="container">
        {this.state.products.length ? (
          this.state.products.map((product) => (
            <div key={product._id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4" infoRed>
                  <img
                    className="myImg"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="col-md-8 infoDiv">
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                      <small className="text-muted">{product.category}</small>
                    </p>
                    <p className="card-text">{product.description}</p>
                  </div>
                </div>
                {/* <div className="col-md-6">
                  <button className="btn btn-danger" onClick={() => this.handleRemove(product._id)}>X</button>
                </div> */}
              </div>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    );
  }
}
