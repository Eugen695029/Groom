import React, { Component } from 'react';
import classes from './Chat.module.css'
import SpecialButton from '../button/SpecialButton.jsx'
import MyInput from '../input/MyInput.jsx'

class Chat extends Component {

    render() {
        if(this.props.visibility==true){
            return (
                <div className={classes.chatContainer}>
                    <div className={classes.screenText}>
                    </div>
                    <div className={classes.inputContainer}>
                        <MyInput/>
                        <div>
                            <SpecialButton img='enter2.png' typ="enter" w="42px" h="42px"/>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div>
                </div>
            );
        }
    }
}

export default Chat;
