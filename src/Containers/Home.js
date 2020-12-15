import React from 'react';
import Posts from "../Components/Posts/Posts";
import IndividualPost from "../Components/Individual-Post/Post";
import Logo from "../Components/Logo/Logo";
import classes from "./Home.module.css";

const Home = () => {
    return (
        <div className = {classes.Container}>
            <div className = {classes.Div1}>
                <Logo />
            </div>

            <div className = {classes.Div2}>
                <IndividualPost />
            </div>

            <div className = {classes.Div3}>
                <Posts />
            </div>

            <div className = {classes.Div4}>
            
            </div>

            <div className = {classes.Div5}>
            
            </div>
        </div>
        
    );
}

export default Home;
