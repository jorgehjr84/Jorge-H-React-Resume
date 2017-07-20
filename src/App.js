import React, { Component } from 'react';
import './App.css';

import Cloud from './Components/Cloud/Cloud';
import StartGame from './Components/StartGame/StartGame';
import Sign1 from './Components/Signs/Sign1';
import ExperienceSign from './Components/Signs/ExperienceSign';
import Character from './Components/Character/Character';
import Trees from './Components/Trees/Trees';
import Mountains from './Components/Mountains/Mountains';
import Plane from './Components/Plane/Plane';
import City from './Components/City/City';
import Caption from './Components/Caption/Caption';

import CloudData from './Data/CloudData';
import TreeData from './Data/TreeData';
import MountainData from './Data/MountainData';
import ExperienceSignData from './Data/ExperienceSignData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      left : 1,  //Moves Clouds Right
      top: 2,
      randoCloud1: 10,
      randoCloud2: 10,
      signLeft : 90,
      experienceSignLeft: 108,  //Moves Clouds Right
      signTop: 2,
      plane: 108,
      city: 280,
      characterLeft: 10,
      characterFacingRight: true, 
      treesLeft: 10,
      mountainsLeft: 10,
      caption: 440,
      displayButton: true,

    }
    this.handleArrowKeys = this.handleArrowKeys.bind(this);
    this.removeButton = this.removeButton.bind(this);
  }

  handleArrowKeys(e) {
    if(e.key === 'ArrowRight' || e === 'right') {
      this.setState({
        left: this.state.left - 1,
        randoCloud1: this.state.randoCloud1 - 5,
        randoCloud2: this.state.randoCloud2 - 5,
        signLeft: this.state.signLeft - 3,
        experienceSignLeft: this.state.experienceSignLeft - 3,
        characterLeft: this.state.characterLeft + 3,
        characterFacingRight: true ,
        treesLeft: this.state.treesLeft - 2,
        plane1: this.state.plane1 - 2,
        plane2: this.state.plane2 - 2,
        city: this.state.city - 2,
        mountainsLeft: this.state.mountainsLeft - 2,
        caption: this.state.caption -2
      })
    } else if (e.key === 'ArrowLeft' || e === 'left') {
      this.setState({
        left: this.state.left + 1,
        randoCloud1: this.state.randoCloud1 + 5,
        randoCloud2: this.state.randoCloud2 + 5,
        signLeft: this.state.signLeft + 3,
        experienceSignLeft: this.state.experienceSignLeft + 3,
        characterLeft : this.state.characterLeft - 3,
        characterFacingRight: false,
        treesLeft: this.state.treesLeft + 2,
        plane1: this.state.plane1 + 2,
        plane2: this.state.plane2 + 2,
        city: this.state.city + 2,
        mountainsLeft: this.state.mountainsLeft + 2,
        caption: this.state.caption + 2
      })
    }
  }

  removeButton() {
    this.setState({
      displayButton: false
    })
  }

  render() {  
    const leftArrowPressed = "left";
    const rightArrowPressed = "right";
    const left = "<";
    const right = ">";

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
        
        <div id="character-container" className="component-container">
          <Character left={this.state.characterLeft + 1} character={this.state.characterFacingRight}/>          
        </div>
          
        <div id="tree-container" className="component-container">
          <Trees treeData={TreeData} treeLeft={this.state.treesLeft}/>  
        </div>
            

        {/* <div className="component-container" id="button-container">
          <button className="LeftButton" onClick={()=> {this.handleArrowKeys(leftArrowPressed)}}>{left}</button>
          <button className="RightButton" onClick={()=> {this.handleArrowKeys(rightArrowPressed)}}>{right}</button>
        </div> */}

        {/* <div id="sign-container" className="component-container">
            <Sign1 left={this.state.signLeft + 1} top={this.state.signTop}/>          
        </div> */}



        {/* <div id="mountain-container" className="component-container">
          <Mountains mountainData={MountainData} mountainLeft={this.state.mountainsLeft}/>          
        </div>   */}
{/* 
        <div id="experience-signs-container" className="component-container">
          <ExperienceSign experienceSignData={ExperienceSignData} experienceSignLeft={this.state.experienceSignLeft}/>            
        </div>   */}
        
{/*         
        <div id="plane-container" className="component-container">
          <Plane left={this.state.plane }/>            
        </div>  
         */}
        
        {/* <div id="city-container" className="component-container">
          <City left={this.state.city }/>            
        </div>   */}
{/* 
        <div id="captions-container" 
        className="component-container" 
        style={{left: this.state.caption + 'em'}}>
          <Caption caption="to be continued......" />
          <Caption caption="what are you still doing here?" />
          <Caption caption="no seriourly, turn around, there's nothing else to see" />
        </div> */}
          
      </div>
    );
  } 
}

export default App;
