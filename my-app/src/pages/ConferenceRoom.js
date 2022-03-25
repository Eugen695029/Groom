import React, { Component } from 'react';
import classes from './ConferenceRoom.module.css'
import SpecialButton from '../button/SpecialButton.jsx'
import MyInput from '../input/MyInput.jsx'
import Chat from '../component/Chat.js'
import { useParams } from 'react-router-dom'
import useWebRTC from '../hooks/useWebRTC.js'

const {id: roomId} = useParams();

class ConferenceRoom extends Component {

    useWebRTC(roomID);

    console.log(roomID);
    state = {
        visibility: false
    };

    viewChat = (value) => {
        if(this.state.visibility==false){
            this.setState({ visibility: value })
        }
        else{
            this.setState({ visibility: !value })
            console.log(value);
        }
    }

    render() {
        return (
            <div className={classes.containerMain}>
                <div className={classes.videContainer}>
                    <div className={classes.containerItem1}>

                    </div>
                    <div className={classes.containerItem2}>
                        <div>
                            <SpecialButton img="video.png" w="42px" h="42px" typ="camer"/>
                        </div>
                        <div>
                            <SpecialButton img="microphone.png" w="42px" h="42px" typ="mikro"/>
                        </div>
                        <div>
                            <SpecialButton img="phone.png" w="42px" h="42px" typ="leav"/>
                        </div>
                        <div>
                            <SpecialButton viewChat={this.viewChat} img="messenger.png" w="42px" h="42px" typ="chat"/>
                        </div>
                    </div>
                </div>
                <Chat visibility={this.state.visibility}/>
            </div>
        );

    }
    
}

export default ConferenceRoom;
