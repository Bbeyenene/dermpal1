// import React, { Component } from "react";
// import "./members.css";
// import API from "../utils/API";

// //all our activities is going to conneted to this page

// export default function Member(props) {
// //   state = {
// //     savedProducts: [],
// //   };

//   // componentDidMount() {
//   //     API.retrievProduct()
//   //         .then(savedProducts => {
//   //             this.setState({ savedProducts: savedProducts })
//   //             console.log('you got your saved products')
//   //         })
//   //         .catch(err => console.error(err));
//   // }

// //   handleDelete = (product) => {
// //     if (
// //       this.state.savedProducts
// //         .map((product) => product._id)
// //         .includes(product._id)
// //     ) {
// //       API.deleteProduct(product._id)
// //         .then((deletedProduct) =>
// //           this.setState({
// //             savedProducts: this.state.savedProducts.filter(
// //               (product) => product._id !== deletedProduct._id
// //             ),
// //           })
// //         )
// //         .catch((err) => console.error(err));
// //     }
// //   };

//   return (
//     <div>
//       {!this.props.products.length ? (
//         <p className="text-center">No Saved Products</p>
//       ) : (
//         <div>
//           {this.props.products.map((props) => (
//             <div className="card col-md-9">
//               <div className="row g-0">
//                 <div className="col-md-3">
//                   <img
//                     width="200"
//                     height="auto"
//                     src={props.imag}
//                     alt={props.title}
//                   />
//                 </div>
//                 <div className="col-md-6">
//                   <div className="card-body">
//                     <h5 className="card-title">{props.title}</h5>
//                     <p className="card-text">{props.description}</p>
//                     <p className="card-text">
//                       <small className="text-muted">
//                         {props.store[0]} ${props.price[0]}
//                       </small>
//                     </p>
//                   </div>
//                 </div>
//                 <div className="col-md-10">
//                   <div className="myBtn col-md-6">
//                     <button
//                     //   onClick={() => this.handleDelete(data)}
//                       className="btn btn-secondary btn-lg"
//                     >
//                       {" "}
//                       <svg
//                         width="1em"
//                         height="1em"
//                         viewBox="0 0 16 16"
//                         className="bi bi-skip-backward-fill"
//                         fill="currentColor"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           fillRule="evenodd"
//                           d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V4a.5.5 0 0 0-.5-.5z"
//                         />
//                         <path d="M.904 8.697l6.363 3.692c.54.313 1.233-.066 1.233-.697V4.308c0-.63-.692-1.01-1.233-.696L.904 7.304a.802.802 0 0 0 0 1.393z" />
//                         <path d="M8.404 8.697l6.363 3.692c.54.313 1.233-.066 1.233-.697V4.308c0-.63-.693-1.01-1.233-.696L8.404 7.304a.802.802 0 0 0 0 1.393z" />
//                       </svg>
//                     </button>
//                     {/* <button className="btn btn-danger btn-lg" onClick={delPro}>X</button> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
