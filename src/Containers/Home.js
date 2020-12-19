import React, { Component, useState } from 'react';
import Posts from "../Components/Posts/Posts";
import IndividualPost from "../Components/Individual-Post/Post";
import Logo from "../Components/Logo/Logo";
import classes from "./Home.module.css";
import NewPost from "../Components/New-Post/new-post";
import JsonInfo from "../json-data/json-data";


class Home extends Component {
    constructor() {
        super()

        this.state = {
            chosen: JsonInfo[0]
        }

        this.clickedBlog = this.clickedBlog.bind(this);
    }

    componentDidMount() {
        axios.get("/blog-post.json")
        .then(res => {
            const s = [];
            for (let e in res.data) {
                s.push({
                    ...res.data[e],
                    id: e
                });
            }
            
           this.setState({dbdata: s, chosen: this.state.dbdata[0]});
        })
        .catch(err => {
            alert(err);
        })
    }

    clickedBlog(clickedIndex) {
        const s = JsonInfo.find((e, i) => {
                return clickedIndex === i;
            });
    
        this.setState({chosen: s});

    }
    
    render() {
        return(
            <div className = {classes.Container}>
                <div className = {classes.Div1}>
                    <Logo />
                </div>

                <div className = {classes.Div2}>
                    <IndividualPost 
                        curpost = {this.state.chosen}
                    />
                </div>

                <div className = {classes.Div3}>
                    <Posts 
                        jsondata = {JsonInfo}
                        clickedBlog = {this.clickedBlog}
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
}


export default Home;

/**
 * 
 */
