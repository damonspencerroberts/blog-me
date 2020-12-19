import React, { Component } from 'react';
import Posts from "../Components/Posts/Posts";
import IndividualPost from "../Components/Individual-Post/Post";
import Logo from "../Components/Logo/Logo";
import classes from "./Home.module.css";
import NewPost from "../Components/new-post/new-post";
import axios from "../Axios";


class Home extends Component {
    constructor() {
        super()

        this.state = {
            chosen: null,
            data: null
        }

        this.clickedBlog = this.clickedBlog.bind(this);
    }

    componentDidMount() {
        axios.get("/blog-post.json")
        .then(res => {
            const s = [];
            for (let e in res.data) {
                s.push({
                    ...res.data[e]
                });
                this.setState({data: s, chosen: s[0]});
            }
        })
        .catch(err => {
            alert(err);
        }) 
    }
    

    clickedBlog(clickedIndex) {
        const s = this.state.data.find((e, i) => {
                return clickedIndex === i;
            });
    
        this.setState({chosen: s});

    }
    
    render() {
        let cont = null;
        if (this.state.data !== null) {
            cont = (
                <React.Fragment>
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
                            jsondata = {this.state.data}
                            clickedBlog = {this.clickedBlog}
                        />
                    </div>

                    <div className = {classes.Div4}>
                        <NewPost />
                    </div>

                    <div className = {classes.Div5}>
                    
                    </div>
                </React.Fragment>
            );
        }
        
        return(
            <div className = {classes.Container}>
                {cont}
            </div>
        );
    }
}


export default Home;
