import profileCss from './Profile.module.css'
import MyPostContainer from './MyPosts/MyPostContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostContainer/>
        </div>
    )
}

export default Profile;