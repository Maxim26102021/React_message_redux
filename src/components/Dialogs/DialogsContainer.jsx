import React from "react";
import {messageWasSendCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.data.getState()

    let onChangeMessageBody = (text) => {
        props.data.dispatch(updateMessageActionCreator(text))
    }

    let onSendMessage = (text) => {
        props.data.dispatch(messageWasSendCreator(text))
    }

    return (
        <Dialogs state={state} sendMessage={onSendMessage} changeMessage={onChangeMessageBody}/>
    )
}

export default DialogsContainer;