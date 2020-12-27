import React from 'react';
import classes from "./Small-Btn.module.css";

const SmallButton = (props) => {
    return <a href={props.link} style = {{color: props.color, backgroundColor: props.bgcolor}} className={classes.Button} onClick = {props.clicked}>{props.text}</a>
}

export default SmallButton;
