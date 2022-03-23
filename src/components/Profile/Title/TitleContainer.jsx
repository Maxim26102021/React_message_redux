import React from 'react'
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/title-reducer";
import Title from "./Title";

const TitleContainer = (props) => {
    let state = props.data.getState()

    let onButtonClick = (text) => {
        props.data.dispatch(addPostActionCreator(text))
    }
    let changePost = (text) => {
        props.data.dispatch(updatePostActionCreator(text))
    }
    return (
        <Title data={state.title.postsData} updateNewPost={changePost} addNewPost={onButtonClick}/>
    )
}

export default TitleContainer