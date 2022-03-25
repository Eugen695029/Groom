import React, { Component } from 'react';
import classes from './ConferenceRoom.module.css'
import SpecialButton from '../button/SpecialButton.jsx'
import MyInput from '../input/MyInput.jsx'
import Chat from '../component/Chat.js'
import { useParams } from 'react-router-dom'
import useWebRTC from '../hooks/useWebRTC.js'
import {useState} from 'react'
import videPNG from '../img/video.png'
import microphonePNG from '../img/microphone.png'
import phonePNG from '../img/phone.png'
import messengerPNG from '../img/messenger.png'
import LOCAL_VIDEO from '../hooks/useWebRTC.js'

function ConferenceRoom() {
    const {id: roomID} = useParams();
    const {clients, provideMediaRef} = useWebRTC(roomID);

    const [visibility, v] = useState(false);

    const viewChat = (value) => {
        if(visibility==false){
            v(value);
        }
        else{
            v(!value);
        }
    };
        return (
            <div className={classes.containerMain}>
                <div className={classes.videContainer}>
                    <div className={classes.containerItem1}>
                        {clients.map((clientID) => {
                            return(
                                <div>
                                    <video
                                        ref={ instance => {
                                         provideMediaRef(clientID, instance)
                                        }}
                                        autoPlay
                                        playsInline
                                        muted={clientID === LOCAL_VIDEO}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    <div className={classes.containerItem2}>
                        <div>
                            <SpecialButton img={videPNG} w="42px" h="42px" typ="camer"/>
                        </div>
                        <div>
                            <SpecialButton img={microphonePNG} w="42px" h="42px" typ="mikro"/>
                        </div>
                        <div>
                            <SpecialButton img={phonePNG} w="42px" h="42px" typ="leav"/>
                        </div>
                        <div>
                            <SpecialButton viewChat={viewChat} img={messengerPNG} w="42px" h="42px" typ="chat"/>
                        </div>
                    </div>
                </div>
                <Chat visibility={visibility}/>
            </div>
        );
}

export default ConferenceRoom;
