import React, { Component } from 'react';
import './Cloud.css';

class Cloud extends Component {   
    render() {
        return (
            <div className="Cloud"
            style={{left: this.props.left + 'em'}}></div>
        );
    } 
}

export default Cloud;
