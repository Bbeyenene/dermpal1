import React from "react";

import Member from "./member";
import axios from "axios";
// import { Component } from "react";

export default class Profile extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios.get(`/api/products/all`).then((res) => {
      const products = res.data;
      this.setState({ products });
    });
  }
  render() {
    return (
      <div>
        {this.state.products.map((item) => (
          <Member
            title={item.title}
            description={item.description}
            image={item.image}
            category={item.category}
            //   products={this.state.savedProducts}
          />
        ))}
      </div>
    );
  }
}

// axios
// .get("/api/products/all")
// .then(function (response) {
//   console.log(response.data);
// })
// .catch(function (error) {
//   console.log(error);
// });

//main profile page
// export default function Profile() {
//   // state = {
//   //   savedProducts: [],
//   // };

//   axios.get("/api/products/all")
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

//   return (
//     <div>
//       {response.map((item) => {
//         return (
//           <Member
//             title={item.data[0].title}
//             description={item.data[0].description}
//             image={item.data[0].image}
//             category={item.data[0].category}
//             //   products={this.state.savedProducts}
//           />
//         );
//       })}
//     </div>
//   );

//
// }
