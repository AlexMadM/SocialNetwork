import React from "react";
import {addPostAC, ProfilePagesType, updateNewTextAC} from "../../redux/State";
import {StateType} from "../../redux/Redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import MyPosts from "./MyPosts";


type mapStateToPropsType = {
    profilePage: ProfilePagesType
}
const mapStateToProps = (store: StateType):mapStateToPropsType => {
    return {
       profilePage: store.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => dispatch(addPostAC()),
        onChanHandler: (postText: string) => dispatch(updateNewTextAC(postText))
    }
}

export const MyPostContainer =
    connect(mapStateToProps, mapDispatchToProps)(MyPosts)