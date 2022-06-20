import profileCss from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postData={props.profileData.postData} addPost={props.addPost} updateNewPostText={props.updateNewPostText} newTextForPost={props.newTextForPost}/>
        </div>
    )
}

export default Profile;