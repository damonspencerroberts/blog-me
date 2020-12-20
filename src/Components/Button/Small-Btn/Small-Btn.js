import React from 'react';
import classes from "./Small-Btn.module.css";

const SmallButton = (props) => {
    return <a href={props.link} className={classes.Button} onClick = {props.clicked}>{props.text}</a>
}

export default SmallButton;
