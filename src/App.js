import React, { Component } from 'react';
import './App.css';

import Cloud from './Components/Cloud/Cloud';
import StartGame from './Components/StartGame/StartGame';
import Sign from './Components/Sign/Sign';
import Character from './Components/Character/Character';
import Trees from './Components/Trees/Trees';

class App extends Component {
  constructor() {
    super();
    this.state = {
      left : 1,  //Moves Clouds Right
      top: 2,
      randoCloud1: 10,
      randoCloud2: 10,
      signLeft : 100,  //Moves Clouds Right
      signTop: 2,
      characterLeft: 10,
      treesLeft: 50,
      displayButton: true  
    }

    this.handleArrowKeys = this.handleArrowKeys.bind(this);
    this.removeButton = this.removeButton.bind(this);
  }

  handleArrowKeys(e) {
    if(e.key === 'ArrowRight') {
      this.setState({
        left: this.state.left - 1,
        randoCloud1: this.state.randoCloud1 - 5,
        randoCloud2: this.state.randoCloud2 - 5,
        signLeft: this.state.signLeft - 1,
        characterLeft: this.state.characterLeft + .5,
        treesLeft: this.state.treesLeft - 2
      })
    } else if (e.key === 'ArrowLeft') {
      this.setState({
        left: this.state.left + 1,
        randoCloud1: this.state.randoCloud1 + 5,
        randoCloud2: this.state.randoCloud2 + 5,
        signLeft: this.state.signLeft + 1,
        characterLeft : this.state.characterLeft - .5,
        treesLeft: this.state.treesLeft + 2
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
          <Cloud left={this.state.randoCloud1 + 15}  top={this.state.top + 1}/>
          <Cloud left={this.state.left + 23}  top={this.state.top + 5}/>
          <Cloud left={this.state.left + 25}  top={this.state.top + 3}/>
          <Cloud left={this.state.left + 30}  top={this.state.top + 10}/>
          <Cloud left={this.state.randoCloud1 + 44}  top={this.state.top + 7}/>
          <Cloud left={this.state.left + 50}  top={this.state.top + 2}/>
          <Cloud left={this.state.randoCloud2 + 51}  top={this.state.top + 1}/>
        </div>
        <div className="signs">
          <Sign left={this.state.signLeft + 1} top={this.state.signTop}/>
        </div>
        <Character left={this.state.characterLeft + 1}/>
        <Trees left={this.state.treesLeft}/>
        <Trees left={this.state.treesLeft + 5}/>
        <Trees left={this.state.treesLeft + 50}/>
        <Trees left={this.state.treesLeft + 100}/>
        <Trees left={this.state.treesLeft + 250}/>
        <Trees left={this.state.treesLeft + 200}/>
      </div>
    );
  } 
}

export default App;
