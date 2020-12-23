import React from 'react';
import classes from "./Post.module.css";
import ReactMarkdown from 'react-markdown'

const Post = (props) => {
    //img
    //title
    //author
    //date
    //content

    const chosenBlog = props.curpost;


    const formatParagraph = (p) => {

        return <ReactMarkdown>{p}</ReactMarkdown>;
    }


    return (
        <div className = {classes.Container}>
            {chosenBlog.isImage ? <img src={chosenBlog.image} alt={"image" + chosenBlog.author}/> : null }
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
