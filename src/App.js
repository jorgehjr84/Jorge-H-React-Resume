import React, { Component } from 'react';
import './App.css';

import Cloud from './Components/Cloud/Cloud';
import StartGame from './Components/StartGame/StartGame';

class App extends Component {
  constructor() {
    super();
    this.state = {
      left : 1,  //Moves Clouds Right
      top: 2,
      displayButton: true  
    }

    this.handleArrowKeys = this.handleArrowKeys.bind(this);
    this.removeButton = this.removeButton.bind(this);
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

  removeButton() {
    console.log("removeButton");
    this.setState({
      displayButton: false
    })
  }

  render() {  
    return (
      <div tabIndex="0" className="App" 
      onKeyDown={this.handleArrowKeys}
      onClick={this.removeButton}>
        {
          this.state.displayButton ? <StartGame /> : null 
        }
        <div className="clouds">
          <Cloud left={this.state.left}/>
          <Cloud left={this.state.left + 1} top={this.state.top + 4}/>
          <Cloud left={this.state.left + 15}  top={this.state.top + 1}/>
          <Cloud left={this.state.left + 23}  top={this.state.top + 5}/>
          <Cloud left={this.state.left + 25}  top={this.state.top + 3}/>
          <Cloud left={this.state.left + 30}  top={this.state.top + 10}/>
          <Cloud left={this.state.left + 44}  top={this.state.top + 7}/>
          <Cloud left={this.state.left + 50}  top={this.state.top + 2}/>
          <Cloud left={this.state.left + 51}  top={this.state.top + 1}/>
        </div>
      </div>
    );
  } 
}

export default App;
