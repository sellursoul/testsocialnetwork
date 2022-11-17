import s from "./Myposts.module.css"
import React from "react";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {textArea} from "../../common/FormsControl/FormsControl";



const Myposts = React.memo(props => {
    let state = props.profilePage;

    let postsElements = state.posts.map(p => <Post message={p.message} likesCount={p.likesCount + " likes"}/>)
    let newPostText = state.newPostText;

    let OnAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={OnAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
})

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={textArea} name="newPostText" placeholder={"Input text"}
            validate={[required, maxLength10]}/></div>
            <div><button>Add post</button></div>
        </form>
    );
}
let AddPostFormRedux = reduxForm({form: "ProfileAddPostForm"})(AddPostForm);

export default Myposts;