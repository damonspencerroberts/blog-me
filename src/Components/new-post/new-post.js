import React from 'react';
import classes from "./Form.module.css";
import ButtonIs from "../Button/Button";


const newPostForm = (props) => {
    return(
        <div id = "new-form">
            <hr className = {classes.Horizontal} />
            <div className = {classes.Form}>
                <h1>New Post</h1>
                <form>
                    <div>
                    <label for="textinput">Author Name</label>  
                        <div class="col-md-4">
                            <input id="textinput" name="textinput" type="text" placeholder="" class="form-control input-md"/>
                        </div>
                    </div>

                    <div className="form-group">
                    <label className="col-md-4 control-label" for="textinput">Blog Title</label>  
                        <div className="col-md-4">
                            <input id="textinput" name="textinput" type="text" placeholder="" className="form-control input-md"/>
                        </div>
                    
                    </div>
                    <div className="form-group">
                    <label className="col-md-4 control-label" for="textarea">Blog Content</label>
                        <div className="col-md-4">                     
                            <textarea className="form-control" id="textarea" name="textarea"></textarea>
                        </div>
                    </div>

                    <div>
                        <ButtonIs text = "Post Blog" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default newPostForm;
