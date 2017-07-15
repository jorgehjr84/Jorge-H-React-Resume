import React, { Component } from 'react';
import './City.css';

class City extends Component {   
    render() {
        return (
            <div className="City"
            style={{left: this.props.left + 'em'}}>

            </div>
        );
    } 
}

export default City;