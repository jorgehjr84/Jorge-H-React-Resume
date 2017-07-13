import React, { Component } from 'react';
import './Sign.css';

class Sign extends Component {   
    render() {
        return (
            <div className="Sign"
            style={{left: this.props.left + 'em', top: this.props.top + 'em' }}>
                <h1>Sign</h1>
            </div>
        );
    } 
}

export default Sign;

//Each Sign will have a header, body, and icon??
