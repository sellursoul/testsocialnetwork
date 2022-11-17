import loader from "../../../assets/img/loader.svg";
import s from "../../Users/Users.module.css";
import React from "react";

let Preloader = (props) => {

    return <div><img src={loader} className={s.loader}/></div>
}
export default Preloader;