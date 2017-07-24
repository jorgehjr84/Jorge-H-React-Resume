import React, { Component } from 'react';
import './Plane.css';

class Plane1 extends Component {   
    render() {
        return (
            <div className="Plane"
                style={{left: this.props.left + 'em'}}>
            </div>
            
        );
    } 
}

export default Plane1;