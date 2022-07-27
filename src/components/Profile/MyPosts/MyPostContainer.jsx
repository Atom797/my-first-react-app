import React from 'react';
import MyPosts from './MyPosts'
import { addPostActionCreator } from '../../../redux/profileReducer'
import { connect } from 'react-redux'


const mapStateToOrops = (state) => {
    return {
        postData: state.profilePage.postData,
        newTextForPost: state.profilePage.newTextForPost
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostBody) => {
            dispatch(addPostActionCreator(newPostBody));
        }
    }
}

const MyPostContainer = connect(mapStateToOrops, mapDispatchToProps)(MyPosts);

export default MyPostContainer;