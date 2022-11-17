import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.head}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj6028P3zlRTPhG7FU6UnVMbO7nKBbepDTgw&usqp=CAU'/>
            <div className={s.loginBlock}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}
export default Header;