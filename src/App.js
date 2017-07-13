import React, { Component } from 'react';
import './App.css';

import Cloud from './Components/Cloud/Cloud';
import StartGame from './Components/StartGame/StartGame';
import Sign from './Components/Sign/Sign';
import Character from './Components/Character/Character';
import Trees from './Components/Trees/Trees';

import CloudData from './CloudData';
import TreeData from './TreeData';

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
      treesLeft: 10,
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
          <Cloud cloudData={CloudData} left={this.state.left} />
        </div>
        <div className="signs">
          <Sign left={this.state.signLeft + 1} top={this.state.signTop}/>
        </div>
        <Character left={this.state.characterLeft + 1}/>
        <Trees treeData={TreeData} treeLeft={this.state.treesLeft}/>
      </div>
    );
  } 
}

export default App;
