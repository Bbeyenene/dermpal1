import React, { Component } from 'react'
import myImg from '../assets/esteel.jpg'
import './members.css'
//all our activities is going to conneted to this page 
const data = {
    title: 'Card title',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    image: myImg,
    store: ["walgreen", "cvs", "target", "macy's",],
    price: [55.97, 46.50, 42.00, 50.20]
}
class Member extends Component {
    constructor() {
        super()
    }

    render() {

        return (
            <div className="card col-md-9" >
                <div className="row g-0">
                    <div className="col-md-3">
                        <img width="200" height="auto" src={myImg} alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">{data.description}</p>
                            <p className="card-text"><small className="text-muted">{data.store[0]} ${data.price[0]}</small></p>
                            <p className="card-text"><small className="text-muted">{data.store[1]} ${data.price[1]}</small></p>
                            <p className="card-text"><small className="text-muted">{data.store[2]} ${data.price[2]}</small></p>
                            <p className="card-text"><small className="text-muted">{data.store[3]} ${data.price[3]}</small></p>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="myBtn col-md-6">
                            <button className="btn btn-secondary btn-lg"> <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-skip-backward-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V4a.5.5 0 0 0-.5-.5z" />
                                <path d="M.904 8.697l6.363 3.692c.54.313 1.233-.066 1.233-.697V4.308c0-.63-.692-1.01-1.233-.696L.904 7.304a.802.802 0 0 0 0 1.393z" />
                                <path d="M8.404 8.697l6.363 3.692c.54.313 1.233-.066 1.233-.697V4.308c0-.63-.693-1.01-1.233-.696L8.404 7.304a.802.802 0 0 0 0 1.393z" />
                            </svg></button>
                            <button className="btn btn-danger btn-lg">X</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Member