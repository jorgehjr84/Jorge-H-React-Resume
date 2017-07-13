import React, { Component } from 'react';
import './App.css';

import Cloud from './Components/Cloud/Cloud';

class App extends Component {
  constructor() {
    super();
    this.state = {
      left : 70 //Moves Clouds Right
    }

    this.handleArrowKeys = this.handleArrowKeys.bind(this);
  }

  handleArrowKeys(e) {
    if(e.key === 'ArrowRight') {
      this.setState({
        left: this.state.left - 1
      })
    } else if (e.key === 'ArrowLeft') {
      this.setState({
        left: this.state.left + 1
      })
    }
  }

  render() {  
    return (
      <div tabIndex="0" className="App" onKeyDown={this.handleArrowKeys}>
        <Cloud left={this.state.left}/>
      </div>
    );
  } 
}

export default App;
