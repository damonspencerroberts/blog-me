import React, {useState} from 'react';
import classes from './Posts.module.css';
import SmallButton from "../Button/Small-Btn/Small-Btn";
import Delete from "../Button/Delete-Btn/Delete";
import axios from "../../Axios";

const Posts = (props) => {
    const data = props.jsondata;
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(3);
    const pWord = "delete-post123";
    const [passPrompt, setPassPrompt] = useState(false);
    const [pass, setPass] = useState("");
    const [current, setCurrent] = useState(null);
    const data1 = data.slice(start, end).sort((a,b) => (a.date > b.date) ? -1 : ((b.date > a.date) ? 1 : 0));
    //e.eachId
    const DifferentPosts = data1.map((e, i) => {
        return (
            <div key = {i} className = {classes.Posts} onClick = {() => props.clickedBlog(i + start)}>
                <Delete clicked = {() => {
                    setPassPrompt(true)
                    setCurrent(e.eachId)
                }}/>
                {passPrompt && current === e.eachId? 
                    <form 
                        className = {classes.DeleteForm}
                        onSubmit = {() => clickDelete(e.eachId)}
                    >
                    <input 
                        type = "password" 
                        placeholder = "Delete Password" 
                        value = {pass} 
                        onChange = {(event) => setPass(event.target.value)} 
                    />
                    <button className = {classes.Button}>Delete Post</button>
                </form> : null}
                <div className = {classes.Title}>
                    <h3>{e.title}</h3>
                </div>
                <p>{e.content.slice(0, 120)}...</p>
                <div className = {classes.Author}>
                    <p>{e.author}</p>
                </div>
                <div className = {classes.Dates}>
                    <p>{e.date}</p>
                </div>
            </div>
        );
    });
    
    const clickDelete = (deletedId) => {
        if (pass === pWord) {
            axios.delete('/final-posts/' + deletedId + ".json");
            props.update(true);
            setPassPrompt(false);
        } else {
            alert("Incorrect Delete Password. Try again!");
        }
    }

    const Next = (start, end, dir) => {
        let s, e;
        if (start <= 0 && dir === "prev" ) {
            s = 0;
            e = 3;
        } else if ((end >= data.length && dir === "next") || (start === data.length - 3 && dir === "next")) {
            s = start;
            e = end;
        } else if (dir === "next") {
            s = start += 3;
            e = end += 3;
        } else if (dir === "prev") {
            s = start -= 3;
            e = end -= 3;
        } else {
            alert("error!")
        }

        setStart(s);
        setEnd(e);
        
    }
    

    return(
        <div className = {classes.List}>
            <div className = {classes.Header}>
                <h1>Previous Posts</h1>
            </div>
            
            {DifferentPosts}

            <div className = {classes.PostBtns}>
                <p>{`Page ${parseInt(end/3)} / ${Math.ceil(data.length/3)}`}</p>
                <SmallButton 
                    text = "Previous" 
                    clicked = {() => Next(start, end, "prev")}
                    color = "#EFC9AF"
                    bgcolor = "#1F8AC0"
                    />
                <SmallButton 
                    text = "Next" 
                    clicked = {() => Next(start, end, "next")}
                    color = "#EFC9AF"
                    bgcolor = "#1F8AC0"
                    />
            </div>
        </div>
    );

}

export default Posts;
