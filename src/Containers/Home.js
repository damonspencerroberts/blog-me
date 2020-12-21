import React, { Component } from 'react';
import Posts from "../Components/Posts/Posts";
import IndividualPost from "../Components/Individual-Post/Post";
import Logo from "../Components/Logo/Logo";
import classes from "./Home.module.css";
import NewPost from "../Components/new-post/new-post";
import axios from "../Axios";
import Spinner from "../Components/Spinner/spinner";
import Footer from "../Components/Footer/footer";
import Null1 from "../Components/Null-pages/np1/null-page1";


class Home extends Component {
    constructor() {
        super()

        this.state = {
            chosen: null,
            data: null,
            spinner: false,
            shouldUpdate: false
        }

        this.clickedBlog = this.clickedBlog.bind(this);
        this.getData = this.getData.bind(this);
        this.changeUpdate = this.changeUpdate.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate() {
        if (this.state.shouldUpdate) {
            for (var i = 1; i < 3; i++) this.getData();
            console.log("updated!");
            this.changeUpdate(false);
        }
    }


    getData() {
        this.setState({spinner: true});
        const s = [];
        axios.get("/blog-post.json")
        .then(res => {
            for (let e in res.data) {
                s.push({
                    ...res.data[e],
                    eachId: e
                });
            }
        }).then(() => {
            if (s.length !== 0) {
                this.setState({data: s, chosen: s[0], spinner: false});
            } else {
                this.setState({data: null, chosen: null, spinner: false});
            }
        })
        .catch(err => {
            this.setState({spinner: false});
            alert(err);
        }); 
    }

    clickedBlog(clickedIndex) {
        const s = this.state.data.find((e, i) => {
                return clickedIndex === i;
            });
    
        this.setState({chosen: s});
    }

    changeUpdate(p) {
        this.setState({shouldUpdate: p});
    }
    
    render() {
        const spin = this.state.spinner;

        let cont = (
            <React.Fragment>
                <div className = {classes.Div1}>
                    <Logo />
                </div>
                <div className = {classes.Div2}>
                    {spin ? <Spinner/> : <Null1 header = "Currently no posts to show!" paragraph = "Please add a post below" size = "4rem" />}
                </div>
                <div className = {classes.Div3}>
                    {spin ? <Spinner/> : <Null1 header = "Previous Posts" paragraph = "No posts yet" size = "3rem"/>}
                </div>
                <div className = {classes.Div4}>
                    <NewPost 
                        update = {this.changeUpdate}
                    />
                </div>
                <div className = {classes.Div5}>
                    <Footer />
                </div>
            </React.Fragment>
        );

        if (this.state.data !== null) {
            cont = (
                <React.Fragment>
                    <div className = {classes.Div1}>
                        <Logo />
                    </div>

                    <div className = {classes.Div2}>
                        {spin ? <Spinner/> : <IndividualPost 
                            curpost = {this.state.chosen}
                        />}
                    </div>

                    <div className = {classes.Div3}>
                        {spin ? <Spinner /> : <Posts 
                            jsondata = {this.state.data}
                            clickedBlog = {this.clickedBlog}
                            update = {this.changeUpdate}
                        />}
                    </div>

                    <div className = {classes.Div4}>
                        <NewPost 
                            update = {this.changeUpdate}
                        />
                    </div>

                    <div className = {classes.Div5}>
                        <Footer />
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
