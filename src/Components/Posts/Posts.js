import React from 'react';
import classes from './Posts.module.css';

const Posts = (props) => {

    const data = props.jsondata;

    
    const DifferentPosts = data.map((e, i) => {
        return (
            <div key = {i} className = {classes.Posts} onClick = {() => props.clickedBlog(i)}>
                <div className = {classes.Title}>
                    <h3>{e.title}</h3>
                </div>
                <p>{e.content.slice(0, 160)}...</p>
                <div className = {classes.Author}>
                    <p>{e.author}</p>
                </div>
                <div className = {classes.Dates}>
                    <p>{e.date}</p>
                </div>
            </div>
        );
    });
    

    return(
        <div className = {classes.List}>
            <div className = {classes.Header}>
                <h1>Previous Posts</h1>
            </div>
            
            {DifferentPosts}
        </div>
    );

}

export default Posts;
