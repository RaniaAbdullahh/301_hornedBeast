import React, { Component } from 'react';

class HornedBeasts extends Component {
    render(){
     
        return(
            <>
            <h2>{this.props.title}</h2>
            <img src={this.props.image_url}/>
            <p>{this.props.description}</p>
            <p> 🦄 :{this.props.horns}</p>
            </>
        )
    }
}
export default HornedBeasts 