import React, { Component } from 'react';
import './Sign.css';

class Sign extends Component {   
    render() {
        return (
            <div>
                <div className="Sign"
                style={{left: this.props.left + 'em', top: this.props.top + 'em' }}>
                    <h1>Jorge's Contact Info</h1>
                    <ul>
                        <li>Phone Number</li>
                        <li>Email</li>
                        <li>Github</li>
                        <li>Linked In</li>
                    </ul>                   
                </div>
            </div>
        );
    } 
}

export default Sign;

//Each Sign will have a header, body, and icon??
