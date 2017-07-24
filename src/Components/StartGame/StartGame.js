import React, { Component } from 'react';
import './StartGame.css';

class StartGame extends Component {   
    render() {
        return (
            <div className="StartGame">
               <button className="desktop">Welcome to Jorge Hernandez's digital resume. Use the left and right arrows to move.</button>
               <button className="mobile">Welcome to Jorge Hernandez's digital resume. Swipe left or right to move Jorge</button>
            </div>
        );
    } 
}

export default StartGame;
