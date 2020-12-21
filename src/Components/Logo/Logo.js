import React from 'react';
import LogoPic from "../../Images/logo.png";
import classes from './Logo.module.css';
import ButtonIs from "../Button/Button";

const Logo = (props) => {
    return (
        <div className = {classes.Logo}>
            <img src = {LogoPic} alt = "logo"/>
            <ButtonIs 
                link = "#new-form" 
                text = "New Post"
                color = "#104C91"
                bgcolor = "#EFC9AF"
                ></ButtonIs>
        </div>
    );
}


export default Logo;
