import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
    //img
    //title
    //author
    //date
    //content

    const chosenBlog = props.curpost;


    const formatParagraph = (p) => {

        const newP = p.split("\n\n");
        const newArr = [];
        for (let e in newP) {
            if (newP[e] !== "") {
                newArr.push(newP[e]);
            }
        }

        const zen = newP.map((e, i) => {
            return <p key = {i}>{e}</p>
        });
        return zen;
    }


    return (
        <div className = {classes.Container}>
            <img src="https://picsum.photos/300" alt="rand"/>
            <div className = {classes.Title}>
                <h1>{chosenBlog.title}</h1>
            </div>
            
            <div className = {classes.Author}>
                <p>{chosenBlog.author}</p>
            </div>
            
            <div className = {classes.Date}>
                <p>{chosenBlog.date}</p>
            </div>
            
            <div className = {classes.Content}>
                {formatParagraph(chosenBlog.content)}
            </div>
        </div>
    );
}

export default Post;
