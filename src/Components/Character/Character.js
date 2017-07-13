import React, { Component } from 'react';
import './Character.css';

class Character extends Component {   
    render() {
        return (
            <div className="Character"
                style={{left: this.props.left + 'px' }}>
            </div>
        );
    } 
}

export default Character;
