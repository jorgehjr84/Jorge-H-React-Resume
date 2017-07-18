import React, { Component } from 'react';
import './Character.css';

class Character extends Component {   
    render() {
        return (
            <div>
                {
                    this.props.character
                    ? <div className="Character-right"
                    style={{left: this.props.left + 'px'}}>
                    </div>
                    :
                    <div className="Character-left"
                    style={{left: this.props.left + 'px'}}>
                    </div>
                }
            </div>
            
            
        );
    } 
}

export default Character;
