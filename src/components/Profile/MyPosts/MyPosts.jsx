import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import profileCss from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postItems = props.postData.map(post => <Post key={post.id} message={post.message} avatar={post.avatar} likesCount={post.likesCount} />)

    let addPost = (values) => {
        props.addPost(values.newPostBody);
    };

    return (
        <div className={profileCss.postBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={addPost} />
            <div className={profileCss.posts}>
                {postItems}
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostBody" placeholder="Enter your post"
                    validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({ form: "dialogAddNewPostForm" })(AddNewPostForm)

export default MyPosts;