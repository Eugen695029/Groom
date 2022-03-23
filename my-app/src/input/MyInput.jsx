import React, { Component } from 'react';
import classes from "./MyInput.module.css"

class MyInput extends Component {
    render() {
        return (
            <input className={classes.myInput} placeholder={this.props.text}/>
        );
    }
}

export default MyInput;
