import React, { Component } from 'react';
import classes from './RegCard.module.css'
import MyButton from "../button/MyButton.jsx"
import MyInput from "../input/MyInput.jsx"

class RegCard extends Component {
    render() {
        return (
            <div className={classes.form}>
                <h2 className={classes.title}>
                SIGN IN TO DROOM
                </h2>
                <p>
                Присоединяйтесь к нам бесплатно! Будьте ближе друг к другу вместе с Droom.
                </p>
                <div className={classes.userdata}>
                    <MyInput text="Username"/>
                    <MyInput text="Password"/>
                    <MyButton goTo="#" text="LOG IN"/>
                </div>
            </div>
        );
    }
}

export default RegCard;
