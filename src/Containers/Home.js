import React, { useState } from 'react';
import Posts from "../Components/Posts/Posts";
import IndividualPost from "../Components/Individual-Post/Post";
import Logo from "../Components/Logo/Logo";
import classes from "./Home.module.css";
import NewPost from "../Components/new-post/new-post";
import JsonInfo from "../json-data/json-data";

const Home = () => {
    const [chosen, setChosen] = useState(JsonInfo[0]);



    const clickedBlog = (clickedIndex) => {
        const s = JsonInfo.find((e, i) => {
            return clickedIndex === i;
        });

        setChosen(s);
    }
    
    return (
        <div className = {classes.Container}>
            <div className = {classes.Div1}>
                <Logo />
            </div>

            <div className = {classes.Div2}>
                <IndividualPost 
                    curpost = {chosen}
                />
            </div>

            <div className = {classes.Div3}>
                <Posts 
                    jsondata = {JsonInfo}
                    clickedBlog = {clickedBlog}
                />
            </div>

            <div className = {classes.Div4}>
                <NewPost />
            </div>

            <div className = {classes.Div5}>
            
            </div>
        </div>
        
    );
}

export default Home;
