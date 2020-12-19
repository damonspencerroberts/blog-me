import React, { useState } from 'react';
import classes from "./Form.module.css";
import ButtonIs from "../Button/Button";
import axios from "../../Axios";


const NewPostForm = (props) => {
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const submitForm = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth()+1;
        const day = currentDate.getDate();

        const fullDate = `${day}/${month}/${year}`;

        const post = {
            blogtitle: title,
            blogauthor: author,
            blogcontent: content,
            blogdate: fullDate
        }

        axios.post('/blog-post.json', post)
            .then(response => {
                console.log("Success");
                setAuthor("");
                setTitle("");
                setContent("");
            })
                
            .catch(error => {
                alert(error);
        });
    }

    return(
        <div id = "new-form">
            <hr className = {classes.Horizontal} />
            <div className = {classes.Form}>
                <h1>New Post</h1>
                <form>
                    <div>
                    <label>Author Name</label>  
                        <div>
                            <input 
                                id="textinput" 
                                name="textinput" 
                                type="text" 
                                value = {author}
                                onChange = {(event) => setAuthor(event.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                    <label>Blog Title</label>  
                        <div>
                            <input 
                                id="textinput" 
                                name="textinput" 
                                type="text" 
                                value = {title}
                                onChange = {(event) => setTitle(event.target.value)}
                            />
                        </div>
                    
                    </div>
                    <div>
                    <label>Blog Content</label>
                        <div>                     
                            <textarea  
                            id="textarea" 
                            name="textarea"
                            value = {content}
                            onChange = {(event) => setContent(event.target.value)}
                            ></textarea>
                        </div>
                    </div>

                    <div>
                        <ButtonIs text = "Post Blog" clicked = {submitForm}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewPostForm;
