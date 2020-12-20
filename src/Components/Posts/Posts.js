import React, {useState} from 'react';
import classes from './Posts.module.css';
import SmallButton from "../Button/Small-Btn/Small-Btn";

const Posts = (props) => {
    const data = props.jsondata;
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(4);
    const data1 = data.slice(start, end).sort((a,b) => (a.date > b.date) ? -1 : ((b.date > a.date) ? 1 : 0));
    
    const DifferentPosts = data1.map((e, i) => {
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

    const Next = (start, end, dir) => {
    
        let s, e;

        if (start <= 0 && dir === "prev" ) {
            s = 0;
            e = 4;
        } else if (dir === "next") {
            s = start += 5;
            e = end += 5;
        } else if (dir === "prev") {
            s = start -= 5;
            e = start -= 5;
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
                <p>{start + 1} - {end + 1} of {data.length} posts.</p>
                <SmallButton text = "Previous" clicked = {() => Next(start, end, "prev")}/>
                <SmallButton text = "Next" clicked = {() => Next(start, end, "next")}/>
            </div>
        </div>
    );

}

export default Posts;
