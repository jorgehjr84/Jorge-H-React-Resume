import React, { Component } from 'react';
import './Trees.css';

class Trees extends Component {   
    render() {
        const trees = this.props.treeData.map((tree, i) => {
            return (
                <div key={i} className="Tree"
                    style={{left: this.props.treeData[i].left + this.props.treeLeft + 'em'}}>
                </div>    
            )    
        })
        return (
            <div className="Trees">
                {trees}
            </div>
        );
    } 
}

export default Trees;