import React from 'react'
import Posts from "../Posts/Posts";


const Post = (props) => {
    console.log(props)
    let postsJsx = props.state.map((post) => {
        return (
            <Posts message={post.message} likes={post.likes}/>
        )
    })
    return (
        <div>
            {postsJsx}
        </div>
    )
}

export default Post;