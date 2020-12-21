import React from 'react';
import classes from './np1.module.css';

const Null1 = (props) => {
    return (
        <div className={classes.Null}>
            <h1 style = {{fontSize: props.size}}>{props.header}</h1>
            <p>{props.paragraph}</p>
        </div>
    );
}

export default Null1;
