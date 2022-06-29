import profileInfoCss from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={profileInfoCss.img} src="https://slovnet.ru/wp-content/uploads/2018/08/1-6.png" />
            </div>
            <div className={profileInfoCss.descriptionBlock}>
                ava+ desctiption
            </div>
        </div>
    )
}

export default ProfileInfo;