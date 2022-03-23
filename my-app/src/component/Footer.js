import React, { Component } from 'react'
import classes from './Footer.module.css'
import { NavLink } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className={classes.container}>
                <NavLink to="/">
                    Droom 2022
                </NavLink>
            </div>
        );
    }
}

export default Footer;
