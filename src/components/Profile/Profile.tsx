import React from "react";
import {ProfileInfo} from "./ProfileInfo";
import {MyPostContainer} from "../MyPosts/MyPostsContainer";


export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostContainer/>
            {/*<MyPosts profilePage={props.profilePage}*/}
            {/*         dispatch={props.dispatch}*/}
            {/*         newPostText={props.newPostText}*/}


        </div>
    )
};
