import React from "react";
import d from './Dialogs.module.css'
import {NavLink} from "react-router-dom";



const DialogItem = (props) => {
    return (
        <div className={d.dialog + ' ' + d.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={d.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {

    let newEl = React.createRef()
    let onChangeMessageBody = () => {
        props.changeMessage(newEl.current.value)
    }

    let onSendMessage = () => {
        props.sendMessage(newEl.current.value)
    }

    let dialogElements = props.state.dialogs.dialogsData.map((dialog) => {
        return (<DialogItem name={dialog.name} id={dialog.id}/>)
    })

    let messagesEls = props.state.dialogs.messagesData.map(message => {
        return (<Message message={message.text}/>)
    })
    return (
        <div className={d.content}>
            <div className={d.dialogsItems}>
                {dialogElements}
            </div>
            <div className={d.messages}>
                {messagesEls}
            </div>
            <div className={d.sendmessage}>
                <textarea ref={newEl} onChange={onChangeMessageBody} value={props.state.dialogs.newMessageBody}></textarea>
                <button onClick={onSendMessage} className={d.send}>send</button>
            </div>
        </div>
    )
}

export default Dialogs;