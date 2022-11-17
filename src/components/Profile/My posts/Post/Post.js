import s from "./Post.module.css"
import React from "react";

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src="https://academiait.ru/wp-content/uploads/2017/06/765-4-650x388.jpg"/>
            {props.message}
            <div>
            <img itemID='like' src='data:image/png;base64,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'/>
            <span>{props.likesCount}</span>
            </div>
        </div>
    )
}
export default Post