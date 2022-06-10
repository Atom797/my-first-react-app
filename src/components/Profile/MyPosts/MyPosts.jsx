import profileCss from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
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
                {postItems}
            </div>
        </div>
    )
}

let postItems = postData.map(post => <Post message={post.message} avatar={post.avatar} likesCount = {post.likesCount}/>)

const postData = [
    {id: 0, message:"Hi! Nice dic", likesCount:1, avatar:"https://img4.goodfon.ru/wallpaper/nbig/4/1b/kapitan-amerika-amerika-kapitan-shchit-zvezda-captain-americ.jpg"},
    {id: 0, message:"Thanks!", likesCount:2, avatar:"https://i.pinimg.com/474x/cb/2f/e7/cb2fe787ad597bef4c6238c6bdc1d5b6.jpg"}
]

export default MyPosts;