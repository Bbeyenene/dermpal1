import React from "react";
import axios from "axios";
import './profile.css'

export default class Profile extends React.Component {
  state = {
    products: [],
  };


  componentDidMount() {
    axios.get(`/api/products/all`, {
      // "x-auth-token": this.props.userInfo.userId
    }).then((res) => {
      console.log(res.data);
      this.setState({ products: res.data });
    });
  }

  handleRemove(id) {
    axios.delete(`/api/products/id=${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);

        const products = this.state.products.filter(product => product._id !== id);
        this.setState({ products });
      })
  }

  render() {
    return (
      <div className="container">
        {this.state.products.map(product =>
          <div key={product._id} className="card mb-3" >
            <div className="row g-0">
              <div className="col-md-4">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text"><small className="text-muted">{product.category}</small></p>
                  <p className="card-text">{product.description}</p>
                </div>
              </div>
              <div className="col-md-6">
                <button className="btn btn-danger" onClick={() => this.handleRemove(product._id)}>X</button>
                {/* <button className="btn btn-danger" onClick={(e) => this.deleteRow(post.id, e)}>Delete</button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
