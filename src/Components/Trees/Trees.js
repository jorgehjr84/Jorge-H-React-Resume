import React, { Component } from 'react';
import './Trees.css';

class Trees extends Component {   
    render() {
        const trees = this.props.treeData.map((tree, i) => {
            return (
                <div key={i} className="Trees"
                    style={{left: this.props.treeData[i].left + this.props.treeLeft + 'em'}}>
                </div>    
            )    
        })
        return (
            <div>
                {trees}
            </div>
        );
    } 
}

export default Trees;