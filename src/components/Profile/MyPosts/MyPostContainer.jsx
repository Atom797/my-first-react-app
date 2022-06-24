import React from 'react';
import MyPosts from './MyPosts'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import StoreContext from '../../../StoreContext';
const MyPostContainer = (props) => {



    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action)
                }
                return <MyPosts
                    addPost={addPost}
                    updateNewPostText={onPostChange}
                    postData={state.profilePage.postData}
                    newTextForPost={state.profilePage.newTextForPost} />
            }}
        </StoreContext.Consumer>
    )
}

export default MyPostContainer;