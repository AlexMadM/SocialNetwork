import React, {ChangeEvent, useState,KeyboardEvent} from "react";
import styles from './MyPosts.module.css'
import Post from "./Post/Post";
import { ProfilePagesType} from "../../redux/State";


export type MyPostsPropsType = {
    profilePage: ProfilePagesType
    addPost: ()=>void
    onChanHandler: (postText: string)=>void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.profilePage.posts.map(el => <Post key={el.id} title={el.text} likesCount={el.likesCount}/>)

    const addPost = () => {
        props.addPost()
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChanHandler(e.currentTarget.value)
    }
    const onEnterClick=(e:KeyboardEvent<HTMLTextAreaElement>)=>{
        if (e.key === "Enter"){
            addPost()
        }
    }
    return (
        <div className={styles.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea
                        onKeyDown={onEnterClick}
                        value={props.profilePage.newPostText}
                        onChange={onChangeHandler}
                    />
                </div>

                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>

            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
};
export default MyPosts;