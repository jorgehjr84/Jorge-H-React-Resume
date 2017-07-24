import React, { Component } from 'react';
import './Mountains.css';

class Mountains extends Component {   
    render() {
        const mountains = this.props.mountainData.map((mountain, i) => {
            return (
                <div key={i} className="Mountain"
                    style={{left: this.props.mountainData[i].left + this.props.mountainLeft + 'em'}}>
                </div>    
            )    
        })

        return (
            <div>
                {mountains}
            </div>
        );
    } 
}

export default Mountains;
