import React from "react";
import s from './dialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let part = "/dialogs/" + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={part}>{props.name}</NavLink>
        </div>
    );
}
export default DialogItem;