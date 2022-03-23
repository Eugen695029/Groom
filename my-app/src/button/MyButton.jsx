import React, { Component } from 'react'
import classes from './MyButton.module.css'
import { NavLink } from 'react-router-dom'

class MyButton extends Component {
    render() {
        return (
            <button onClick={() =>{window.location.assign(this.props.goTo)}} className={classes.myButton} style={{background: this.props.color}}>
                {this.props.text}
            </button>
        );
    }
}

export default MyButton;
