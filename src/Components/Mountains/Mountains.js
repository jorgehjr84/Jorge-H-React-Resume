import React, { Component } from 'react';
import './Mountains.css';

class Mountains extends Component {   
    render() {
        return (
            <div className="Mountains"
            style={{left: this.props.left + 'em'}}>

            </div>
        );
    } 
}

export default Mountains;