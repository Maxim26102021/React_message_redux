import React from "react";
import p from './Posts.module.css'

const Posts = (props) => {
    return (
        <div className={p.posts}>
            <div>{props.message}</div>
            <div>Likes {props.likes}</div>
        </div>
    )
}

export default Posts