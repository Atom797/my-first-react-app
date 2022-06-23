import React from 'react';
import MyPosts from './MyPosts'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer'
const MyPostContainer = (props) => {

    let state = props.store.getState();
    
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange =(text) =>{
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action)
    }
    
    return (
        <MyPosts
            addPost = {addPost}
            updateNewPostText = {onPostChange}
            postData={state.profilePage.postData} 
            newTextForPost={state.profilePage.newTextForPost} />
    )
}

export default MyPostContainer;