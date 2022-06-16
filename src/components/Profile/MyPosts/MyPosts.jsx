import profileCss from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = (props) => {
    return (
        <div className={profileCss.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value="10"></textarea>
                </div>
                <div>
                    <button >Add post</button>
                </div>
            </div>
            <div className={profileCss.posts}>
                {postItems(props)}
            </div>
        </div>
    )
}

const postItems =(props) => props.postData.map(post => <Post message={post.message} avatar={post.avatar} likesCount = {post.likesCount}/>)



export default MyPosts;