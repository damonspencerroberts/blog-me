import React from 'react';
import LogoPic from "../../Images/logo.png";
import classes from './Logo.module.css';

const Logo = () => {
    return (
        <div className = {classes.Logo}>
            <img src = {LogoPic} alt = "logo"/>
        </div>
    );
}

export default Logo;
