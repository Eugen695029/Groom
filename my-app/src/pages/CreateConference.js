import React, { Component } from 'react'
import classes from './CreateConference.module.css'
import MyInput from '../input/MyInput.jsx'
import MyButton from '../button/MyButton.jsx'
import socket from '../socket/index.js'
import ACTIONS from '../socket/actions.js'
import {useState, useEffect} from 'react'



function Conference() {

    const [rooms, updateRooms] = useState([]);

    useEffect(() => {
        socket.on(ACTIONS.SHARE_ROOMS, ({rooms = []} = {}) => {
        updateRooms(rooms);
        });
    }, []);

   
        return (
            <div className={classes.container}>
                <div className={classes.box}>
                    <h1>
                        Создать конференцию
                    </h1>
                    <div className={classes.boxItem}>
                            <MyButton goTo='/conferenceRoom/' text="Создать" w="100%" color="#06b06d"/>
                    </div>
                </div>
            </div>
        );
    
}

export default Conference;
