import React, { Component } from 'react';
import './App.css';

import Cloud from './Components/Cloud/Cloud';
import StartGame from './Components/StartGame/StartGame';
import Sign1 from './Components/Signs/Sign1';
import Sign2 from './Components/Signs/Sign2';
import Character from './Components/Character/Character';
import Trees from './Components/Trees/Trees';
import Mountains from './Components/Mountains/Mountains';
import Plane1 from './Components/Planes/Plane1';
import City from './Components/City/City';
import Caption from './Components/Caption/Caption';

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
      signLeft : 90,
      experienceSignLeft: 120,  //Moves Clouds Right
      signTop: 2,
      plane1: 130,
      plane2: 400,
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

        <button className="LeftButton" onClick={()=> {this.handleArrowKeys(leftArrowPressed)}}>{left}</button>
        <button className="RightButton" onClick={()=> {this.handleArrowKeys(rightArrowPressed)}}>{right}</button>

        <div className="clouds">
          <Cloud cloudData={CloudData} left={this.state.left} />
        </div>
        <div className="signs">
          <Sign1 
          left={this.state.signLeft + 1} 
          top={this.state.signTop}
          />          
        </div>
        <Character left={this.state.characterLeft + 1} character={this.state.characterFacingRight}
        />
        <Trees treeData={TreeData} treeLeft={this.state.treesLeft}/>
        <Mountains left={this.state.mountainsLeft}/>
        <Mountains left={this.state.mountainsLeft + 40}/>
        <Mountains left={this.state.mountainsLeft + 90}/>
        <Mountains left={this.state.mountainsLeft + 160}/>
          
        <div className="experience-signs">
          <Sign2 
          header="Cubic Corporation" 
          title="Software Engineer" 
          date="June 2017 - Present"
          skill1="React JS" 
          skill2="Node JS" 
          skill3="HTML" 
          skill4="CSS" 
          left={this.state.experienceSignLeft + 130}
          />
          <Sign2 
          header="Medullan" 
          title="Assoc. Software Developer" 
          date="April 2016 - June 2017" 
          skill1="Android and iOS Development" 
          skill2="Angular JS" 
          skill3="Node JS" 
          skill4="Amazon Echo Skillskit"
          left={this.state.experienceSignLeft + 145}
          />
          <Sign2 
          header="Freelance" 
          title="Web Developer" 
          date="November 2015 - Present" 
          skill1="Angular JS" 
          skill2="HTML" 
          skill3="CSS" 
          skill4="Jquery"
          left={this.state.experienceSignLeft + 160}
          />
          <Sign2 
          header="LAV Productions LLC" 
          title="Owner" 
          date="August 2008 - Present" 
          skill1="Leadership Skills" 
          skill2="Communication" 
          skill3="Invoicing" 
          skill4="Client Relations"
          left={this.state.experienceSignLeft + 175}
          />
        </div>
        <Plane1 left={this.state.plane1 }/>
        <City left={this.state.city }/>
        <div className="captions-container"
        style={{left: this.state.caption + 'em'}}>
          <Caption caption="to be continued......" />
          <Caption caption="what are you still doing here?" />
          <Caption caption="no seriourly, turn around, there's nothing else to see" />
        </div>
      </div>
    );
  } 
}

export default App;
