import React from "react";
import s from './sideBar.module.css'
import {NavLink} from "react-router-dom";

const sideBar = () => {
    return (
        <nav className={s.sideBar}>
            <div>
                <NavLink to="/Profile" className={navData=>navData.isActive ? s.active:s.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/Dialogs" className={navData=>navData.isActive ? s.active:s.item}>Massages</NavLink>
            </div>
            <div>
                <NavLink to="/Users" className={navData=>navData.isActive ? s.active:s.item}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/News" className={navData=>navData.isActive ? s.active:s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Music" className={navData=>navData.isActive ? s.active:s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Settings" className={navData=>navData.isActive ? s.active:s.item}>Settings</NavLink>
            </div>
        </nav>
    );
}
export default sideBar;