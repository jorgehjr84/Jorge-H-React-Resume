import React, { Component } from 'react';
import './Trees.css';

class Trees extends Component {   
    render() {
        return (
            <div className="Trees"
            style={{left: this.props.left + 'em'}}>
            </div>
        );
    } 
}

export default Trees;
