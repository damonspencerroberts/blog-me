import React, { useState } from 'react';
import classes from "./Form.module.css";
import ButtonIs from "../Button/Button";
import axios from "../../Axios";
import Spinner from "../Spinner/spinner";


const NewPostForm = (props) => {
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [spinner, setSpinner] = useState(false);
    const [error, setError] = useState(false);

    const submitForm = () => {
        setSpinner(true);
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth()+1;
        const day = currentDate.getDate();

        const fullDate = `${day}/${month}/${year}`;


        const post = {
            title: title,
            author: author,
            content: content,
            date: fullDate
        }
        
        if (post.title !== "" && post.author !== "" && post.content !== "") {
            axios.post('/blog-post.json', post)
                .then(response => {
                    console.log("Success");
                    setSpinner(false);
                    setError(false);
                    setAuthor("");
                    setTitle("");
                    setContent("");
                })
                    
                .catch(error => {
                    alert(error);
            });
        } else {
            setSpinner(false);
            setError(true);
        }
        
    }

    return(<React.Fragment>
            {spinner ? <Spinner /> : <div id = "new-form">
                <hr className = {classes.Horizontal} />
                <div className = {classes.Form}>
                    <h1>New Post</h1>
                    {error ? <p style = {{color: "red"}}>Please dont leave any fields blank!</p> : null}
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
                                    required
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
                                    required
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
                                required
                                ></textarea>
                            </div>
                        </div>

                        <div>
                            <ButtonIs text = "Post Blog" clicked = {submitForm}/>
                        </div>
                    </form>
                </div>
            </div>}
        </React.Fragment>
    );
}

export default NewPostForm;
