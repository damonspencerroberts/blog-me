import React from 'react';
import LogoPic from "../../Images/logo.png";
import classes from './Logo.module.css';
import ButtonIs from "../Button/Button";

const Logo = () => {
    return (
        <div className = {classes.Logo}>
            <img src = {LogoPic} alt = "logo"/>
            <ButtonIs link = "#new-form" text = "New Post"></ButtonIs>
        </div>
    );
}

export default Logo;
