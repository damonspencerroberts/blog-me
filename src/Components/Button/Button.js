import React from 'react';
import classes from "./Btn.module.css";

const Button = (props) => {
    return <a href={props.link} 
        className={classes.Button} 
        onClick = {props.clicked}
        style = {{
            color: props.color,
            backgroundColor: props.bgcolor
        }}
        >{props.text}</a>
}

export default Button;


