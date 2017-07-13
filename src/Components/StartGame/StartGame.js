import React, { Component } from 'react';
import './StartGame.css';

class StartGame extends Component {   
    constructor() {
        super();
        this.state = {
            displayButton: true
        }

        this.removeButton = this.removeButton.bind(this);
    }

    removeButton() {
        console.log('remove button')
        this.setState({
            displayButton: false
        })
    }

    render() {
        return (
            <div className="StartGame">
                {
                    this.state.displayButton ? <button onClick={this.removeButton}>Play</button> : null
                }
            </div>
        );
    } 
}

export default StartGame;
