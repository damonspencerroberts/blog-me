import React from 'react';
import classes from './Posts.module.css';

const Posts = () => {

    return(
        <div className = {classes.List}>
            <div className = {classes.Header}>
                <h1>Previous Posts</h1>
            </div>
            
            <div className = {classes.Posts}>
                <div className = {classes.Title}>
                    <h3>The wonderful world of Jameson</h3>
                </div>
                <p>Preview for the wonderful that begins with a nice little story at the edge of a cliff. It was dark that night when young danny boy decided to go up the mount...</p>
                <div className = {classes.Author}>
                    <p>Robert Buchanan</p>
                </div>
                <div className = {classes.Dates}>
                    <p>11/03/2020</p>
                </div>
            </div>
            
            <div className = {classes.Posts}>
                <div className = {classes.Title}>
                    <h3>The wonderful world of Jameson</h3>
                </div>
                <p>Preview for the wonderful that begins with a nice little story at the edge of a cliff. It was dark that night when young danny boy decided to go up the mount...</p>
                <div className = {classes.Author}>
                    <p>Robert Buchanan</p>
                </div>
                <div className = {classes.Dates}>
                    <p>11/03/2020</p>
                </div>
            </div>
            
            <div className = {classes.Posts}>
                <div className = {classes.Title}>
                    <h3>The wonderful world of Jameson</h3>
                </div>
                <p>Preview for the wonderful that begins with a nice little story at the edge of a cliff. It was dark that night when young danny boy decided to go up the mount...</p>
                <div className = {classes.Author}>
                    <p>Robert Buchanan</p>
                </div>
                <div className = {classes.Dates}>
                    <p>11/03/2020</p>
                </div>
            </div>
            
            <div className = {classes.Posts}>
                <div className = {classes.Title}>
                    <h3>The wonderful world of Jameson</h3>
                </div>
                <p>Preview for the wonderful that begins with a nice little story at the edge of a cliff. It was dark that night when young danny boy decided to go up the mount...</p>
                <div className = {classes.Author}>
                    <p>Robert Buchanan</p>
                </div>
                <div className = {classes.Dates}>
                    <p>11/03/2020</p>
                </div>
            </div>
        </div>
    );

}

export default Posts;
