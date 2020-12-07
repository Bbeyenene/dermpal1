import React, { Component } from 'react'
//all our activities is going to conneted to this page 
class Home extends Component {
    // constructor() {
    //     super()
    // }


    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <h1>Welcome to the home page</h1>
                <h1>all our activities is going to conneted to this page </h1>
                <p>It's good to be home</p>
                <img style={imageStyle} src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg" alt="myImage" />
            </div>
        )
    }
}

export default Home