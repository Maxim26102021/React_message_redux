import React from 'react'
import s from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

class Sidebar extends React.Component {
    render() {
        return (
            <div className={s.sidebar}>
                <NavLink className={(navData) => (navData.isActive ? s.active : s.item)}  to="/title" >Title</NavLink>
                <NavLink className={(navData) => (navData.isActive ? s.active : s.item)} to="/dialogs">Dialogs</NavLink>
                <NavLink className={(navData) => (navData.isActive ? s.active : s.item)} to="/news">News</NavLink>
            </div>
        )
    }
}

export default Sidebar