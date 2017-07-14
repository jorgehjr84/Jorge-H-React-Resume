import React, { Component } from 'react';
import './Signs.css';

class Sign2 extends Component {   
    render() {
        return (
                <div className="Sign2"
                style={{left: this.props.left + 'em', top: this.props.top + 'em' }}>
                    <h1>{this.props.header}</h1>
                    <h2>{this.props.title}</h2>
                    <h4>{this.props.date}</h4>
                </div>
        );
    } 
}

export default Sign2;
