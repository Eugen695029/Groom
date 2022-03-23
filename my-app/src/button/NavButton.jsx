import React, { Component } from 'react';
import classes from './NavButton.module.css'

class NavButton extends Component {
    render() {
        return (
            <button onClick={() =>{window.location.assign(this.props.goTo)}} className={classes.navBt} style={{background: this.props.color}}>
                {this.props.text}
            </button>
        );
    }
}

export default NavButton;
