import React, { Component } from 'react';
import './Caption.css';

class Caption extends Component {   
    render() {
        return (
                <h1 
                className="Caption"
                style={{left: this.props.left}}>
                {this.props.caption}</h1>
        );
    } 
}

export default Caption;
