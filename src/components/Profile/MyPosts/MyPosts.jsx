import React from 'react';
import profileCss from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = (props) => {

    let postItems = props.postData.map(post => <Post message={post.message} avatar={post.avatar} likesCount = {post.likesCount}/>)
    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text);
    };
    
    return (
        <div className={profileCss.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={profileCss.posts}>
                {postItems}
            </div>
        </div>
    )
}

export default MyPosts;