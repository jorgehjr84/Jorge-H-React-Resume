import React, { Component } from 'react';
import './Signs.css';

class Sign2 extends Component {   
    render() {
        return (
            <div className="Sign2"
            style={{left: this.props.left + 'em'}}>
                <h1>{this.props.header}</h1>
                <h2>{this.props.title}</h2>
                <h4>{this.props.date}</h4>
                <ul>
                    <li>{this.props.skill1}</li>
                    <li>{this.props.skill2}</li>
                    <li>{this.props.skill3}</li>
                    <li>{this.props.skill4}</li>                
                </ul>
            </div>
        );
    } 
}

export default Sign2;
