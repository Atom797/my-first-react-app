import profileCss from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postData={props.profileData.postData} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;