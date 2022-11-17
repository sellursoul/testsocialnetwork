import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostsContainer from "./My posts/MypostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MypostsContainer />
        </div>
    );
}
export default Profile;