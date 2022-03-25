import React from "react"
import NavButton from '../button/NavButton'
import classes from './Header.module.css'
import Footer from './Footer.js'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
  } from 'react-router-dom'
import Home from '../pages/Home.js'
import Register from '../pages/Register.js'
import Conference from '../pages/Conference.js'
import CreateConference from '../pages/CreateConference.js'
import System from '../pages/System.js'
import ConferenceRoom from '../pages/ConferenceRoom.js'



function Header(){

    return (
        <Router>
            <div className={classes.header}>
                <NavLink to="/" className={classes.logo}>Droom</NavLink>
                <div className={classes.navButton}>
                    <NavButton goTo="/system" text="ВОЙТИ"/>
                    <NavButton goTo="/createConference" text="СОЗДАТЬ КОНФЕРЕНЦИЮ"/>
                    <NavButton goTo="/conference" text="ВОЙТИ В КОНФЕРЕНЦИЮ"/>
                </div>
                <div  className={classes.navButton} style={{marginRight:"1.5%"}}>
                    <NavButton goTo="/register" text="РЕГИСТРАЦИЯ" color="#06b06d"/>
                </div>
            </div>
            <Routes>
                <Route  path='/' element={<Home/>}/>
                <Route  path='/register' element={<Register/>}/>
                <Route  path='/conference' element={<Conference/>}/>
                <Route  path='/createConference' element={<CreateConference/>}/>
                <Route  path='/system' element={<System/>}/>
                <Route  path='/conferenceRoom/:id' element={<ConferenceRoom/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default Header;
