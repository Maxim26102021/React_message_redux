import React from 'react'
import t from './Title.module.css'
import Post from "../Post/Post";

const Title = (props) => {
    console.log(props.data)
    let newEl = React.createRef()

    let onButtonClick = () => {
        let text = newEl.current.value;
        props.addNewPost(text)
    }
    let changePost = () => {
        let text = newEl.current.value;
        console.log(props.updateNewPost)
        props.updateNewPost(text)
    }
    return (
        <div className={t.title}>
            <textarea ref={newEl} onChange={changePost} value={props.data.newPost}></textarea>
            <button onClick={onButtonClick}>Add post</button>
            <Post state={props.data}/>
        </div>
    )
}

export default Title