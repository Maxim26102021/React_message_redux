import React from 'react'
import TitleContainer from "./Title/TitleContainer";
import Avatar from "../Avatar/Avatar";

let Profile = (props) => {
    return (
        <div>
            <Avatar/>
            <TitleContainer data={props.store}/>
        </div>


    )
}


export default Profile