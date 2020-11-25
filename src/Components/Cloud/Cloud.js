import React, { Component } from 'react';
import './Cloud.css';

class Cloud extends Component {
    render() {
        const clouds = this.props.cloudData.map((cloud, i) => {
            return (
                <div key={i} className="Cloud"
                style={{left: this.props.cloudData[i].left + this.props.left + 'em', top: this.props.cloudData[i].top + 'em' }}></div>
            )
        })
        return (
            <div>
                {clouds}
            </div>
        );
    } 
}

export default Cloud;
