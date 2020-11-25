import React, { Component } from 'react';
import './Signs.css';

class ExperienceSign extends Component {   
    render() {
        const experienceSigns = this.props.experienceSignData.map((experienceSign, i) => {
            return (
                <div key={i} className="ExperienceSign"
                style={{left: this.props.experienceSignData[i].left + this.props.experienceSignLeft + 'em'}}>
                    <h1>{this.props.experienceSignData[i].header}</h1>
                    <h2>{this.props.experienceSignData[i].title}</h2>
                    <h4>{this.props.experienceSignData[i].date}</h4>
                    <ul>
                        <li>{this.props.experienceSignData[i].skill1}</li>
                        <li>{this.props.experienceSignData[i].skill2}</li>
                        <li>{this.props.experienceSignData[i].skill3}</li>
                        <li>{this.props.experienceSignData[i].skill4}</li>                
                    </ul>
                </div>
            )
        })
        return (
            <div>
                {experienceSigns}
            </div>
        );
    } 
}

export default ExperienceSign;
