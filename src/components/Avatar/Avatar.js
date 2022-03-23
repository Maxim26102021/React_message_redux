import React from 'react'
import a from './Avatar.module.css'


let url = "https://hornews.com/upload/images/blank-avatar.jpg";

class Avatar extends React.Component {


    render() {
        return (
            <div>
                <div>Мой профиль</div>
                <img className={a.avatar} src={url} alt=""/>
            </div>
        )
    }
}

export default Avatar;