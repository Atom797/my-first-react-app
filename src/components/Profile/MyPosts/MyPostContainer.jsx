import React from 'react';
import MyPosts from './MyPosts'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer'
import {connect} from 'react-redux'


const mapStateToOrops = (state) => {
    return {
        postData: state.profilePage.postData,
        newTextForPost: state.profilePage.newTextForPost
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
        }
    }
}

const MyPostContainer = connect(mapStateToOrops, mapDispatchToProps)(MyPosts);

export default MyPostContainer;