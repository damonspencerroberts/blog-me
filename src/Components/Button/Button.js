import React from 'react';
import classes from "./Btn.module.css";

const Button = (props) => {
    return <a href={props.link} className={classes.Button} onClick = {props.clicked}>{props.text}</a>
}

export default Button;


