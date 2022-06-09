import profileCss from './Post.module.css'
const Post = (props) => {
    return (
        <div className={profileCss.item}>
            <img src={props.avatar} />
            <div>
                <div>{props.message}</div>
                <div>{props.likesCount} likes</div>
            </div>

        </div>
    )
}

export default Post;