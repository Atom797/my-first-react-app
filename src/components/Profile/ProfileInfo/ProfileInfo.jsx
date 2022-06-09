import profileInfoCss from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://cdn.igromania.ru/mnt/news/3/3/2/9/c/1/74637/6ad8781a8413453c_1200xH.jpg" />
            </div>
            <div className={profileInfoCss.descriptionBlock}>
                ava+ desctiption
            </div>
        </div>
    )
}

export default ProfileInfo;