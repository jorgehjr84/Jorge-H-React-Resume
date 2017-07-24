import React, { Component } from 'react';
import './App.css';

import Cloud from './Components/Cloud/Cloud';
import StartGame from './Components/StartGame/StartGame';
import ContactSign from './Components/Signs/ContactSign';
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
      cloudLeft : 1,
      top: 2,
      signLeft : 90,
      experienceSignLeft: 108,
      signTop: 2,
      plane: 140,
      city: 300,
      characterLeft: 10,
      characterFacingRight: true, 
      treesLeft: 10,
      mountainsLeft: 10,
      caption: 440,
      displayButton: true,
      startingX: 0,
      change: 0
    }
    this.handleArrowKeys = this.handleArrowKeys.bind(this);
    this.removeButton = this.removeButton.bind(this);
    this.handleTouchStarted = this.handleTouchStarted.bind(this);
    this.handleTouchMoved = this.handleTouchMoved.bind(this);
    this.handleTouchEnded = this.handleTouchEnded.bind(this);
  }

  handleArrowKeys(e) {
    if(e.key === 'ArrowRight' || e === 'right') {
      this.setState({
        cloudLeft: this.state.cloudLeft - 1,
        signLeft: this.state.signLeft - 3,
        experienceSignLeft: this.state.experienceSignLeft - 3,
        characterLeft: this.state.characterLeft + 3,
        characterFacingRight: true ,
        treesLeft: this.state.treesLeft - 2,
        plane: this.state.plane - 2,
        city: this.state.city - 2,
        mountainsLeft: this.state.mountainsLeft - 2,
        caption: this.state.caption -2
      })
    } else if (e.key === 'ArrowLeft' || e === 'left') {
      this.setState({
        cloudLeft: this.state.cloudLeft + 1,
        signLeft: this.state.signLeft + 3,
        experienceSignLeft: this.state.experienceSignLeft + 3,
        characterFacingRight: false,
        treesLeft: this.state.treesLeft + 2,
        plane: this.state.plane + 2,
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
  
  handleTouchStarted(e) {
    this.setState({
      startingX: e.touches[0].clientX
    })
  }
  
  handleTouchMoved(e) {
    var change = this.state.startingX - e.changedTouches[0].clientX
    var touch = e.touches[0]

    this.setState({
      change: this.state.startingX - touch.clientX      
    })
    e.preventDefault(); 
    if(change < 0) {
      this.setState({
        change: this.state.startingX - e.changedTouches[0].clientX,
        cloudLeft: this.state.cloudLeft - (change / 50),
        signLeft: this.state.signLeft - (change / 40),
        experienceSignLeft: this.state.experienceSignLeft - (change / 40),
        characterLeft: this.state.characterLeft + (change / 55),
        characterFacingRight: false,
        treesLeft: this.state.treesLeft - (change / 40),
        plane: this.state.plane - (change / 40),
        city: this.state.city - (change / 55),
        mountainsLeft: this.state.mountainsLeft - (change / 40),
        caption: this.state.caption - (change / 45),
        })
    } else {
      this.setState({
        change: this.state.startingX - e.changedTouches[0].clientX,
        cloudLeft: this.state.cloudLeft - (change / 50),
        signLeft: this.state.signLeft - (change / 40),
        experienceSignLeft: this.state.experienceSignLeft - (change / 40),
        characterLeft: this.state.characterLeft + (change / 55),
        characterFacingRight: true ,
        treesLeft: this.state.treesLeft - (change / 40),
        plane: this.state.plane - (change / 40),
        city: this.state.city - (change / 55),
        mountainsLeft: this.state.mountainsLeft - (change / 40),
        caption: this.state.caption - (change / 45)
      })
    }
  }
  
  handleTouchEnded(e) {
    var change = this.state.startingX - e.changedTouches[0].clientX
  }

  render() {  
    const leftArrowPressed = "left";
    const rightArrowPressed = "right";
    const left = "<";
    const right = ">";

    return (
      <div tabIndex="0" className="App" 
      onKeyDown={this.handleArrowKeys}
      onClick={this.removeButton}
      onTouchStart={this.handleTouchStarted}
      onTouchMove={this.handleTouchMoved}
      onTouchEnd={this.handleTouchEnded}>
        {
          this.state.displayButton ? <StartGame /> : null 
        }
        <div className="clouds">
         <Cloud cloudData={CloudData} left={this.state.cloudLeft} />
        </div>
        
        <div id="character-container" className="component-container">
          <Character left={this.state.characterLeft + 1} character={this.state.characterFacingRight}/>          
        </div>
          
        <div id="tree-container" className="component-container">
          <Trees treeData={TreeData} treeLeft={this.state.treesLeft}/>  
        </div>
        
        <div id="mountain-container" className="component-container">
          < Mountains mountainData={MountainData} mountainLeft={this.state.mountainsLeft}/>          
        </div>
 
        <div id="contact-sign-container" className="component-container">
          <ContactSign left={this.state.signLeft + 20}/>          
        </div>
    
        <div id="plane-container" className="component-container">
          <Plane left={this.state.plane }/>            
        </div>  


        <div id="experience-signs-container" className="component-container">
          <ExperienceSign experienceSignData={ExperienceSignData} experienceSignLeft={this.state.experienceSignLeft}/>            
        </div>
        
        <div id="city-container" className="component-container">
          <City left={this.state.city }/>            
        </div>

        <div id="captions-container" 
        className="component-container" 
        style={{left: this.state.caption + 'em'}}>
          <Caption caption="to be continued......" left={0}/>
          <Caption caption="what are you still doing here?" left={1500}/>
          <Caption caption="no seriourly, turn around, there's nothing else to see" left={3000}/>
        </div>
      </div>
    );
  } 
}

export default App;
