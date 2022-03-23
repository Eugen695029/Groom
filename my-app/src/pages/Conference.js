import React, { Component } from 'react'
import classes from './Conference.module.css'
import MyInput from '../input/MyInput.jsx'
import MyButton from '../button/MyButton.jsx'

class Conference extends Component {
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.box}>
                    <h1>
                        Войти в конференцию
                    </h1>
                    <div className={classes.boxItem}>
                        <MyInput text="Укажите идентификатор"/>

                        <div>
                            <MyButton goTo="/conferenceRoom" text="ПРИСОЕДИНИТЬСЯ" color="#06b06d"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Conference;
