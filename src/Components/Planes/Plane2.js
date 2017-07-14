import React, { Component } from 'react';
import './Plane.css';

class Plane2 extends Component {   
    render() {
        return (
                <div className="Plane2"
                style={{left: this.props.left + 'em', top: 3 + 'em' }}>
                </div>
        );
    } 
}

export default Plane2;
