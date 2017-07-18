import React, { Component } from 'react';
import './Signs.css';

class Sign1 extends Component {   
    render() {
        return (
            
                <div className="Sign"
                style={{left: this.props.left + 'em', top: this.props.top + 'em' }}>
                    <h1 className="sign1-header">Jorge's Contact Info</h1>
                    <ul className="sign1-ul">
                        <li className="sign1-l1">Phone Number: 407.334.7103</li>
                        <li className="sign1-l1"><a href="mailto:jorgehjr84@gmail.com?subject=I saw your portfolio and ..." >Email : jorgehjr84@gmail.com</a></li>
                        <li className="sign1-l1"><a href="https://github.com/jorgehjr84" target="_blank" >Github : https://github.com/jorgehjr84</a></li>
                        <li className="sign1-l1"><a href="https://www.linkedin.com/in/jorge-hernandez-b7574068/" target="_blank" >LinkedIn : https://www.linkedin.com/in/jorge-hernandez-b7574068/</a></li>
                    </ul>                   
                </div>
            
        );
    } 
}

export default Sign1;

