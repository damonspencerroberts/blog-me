import React from 'react';
import classes from "./Delete.module.css";

const Delete = (props) => {
    return <div className = {classes.delete} onClick = {props.clicked}>X</div>
}   

export default Delete;
