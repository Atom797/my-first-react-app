import Preloader from "../../common/Preloader/Preloader";
import profileInfoCss from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";



const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />;
    }

    const viewContacts = (contacts) => {
        const contactsArr = Object.entries(contacts);
        const contactsArrResult = []
        contactsArr.forEach(([name, value]) => {
            if (value != null) {
                contactsArrResult.push(<p>{name} : {value}</p>)
            }
        });
        return contactsArrResult;
    }

    return (
        <div className={profileInfoCss.mainContainer}>
            <div>
                <img
                    className={profileInfoCss.img}
                    src={
                        props.profile.photos.large != null
                            ? props.profile.photos.large
                            : "https://slovnet.ru/wp-content/uploads/2018/08/1-6.png"
                    }
                />
            </div>
            <div className={profileInfoCss.descriptionBlock}>
                <div>
                    Статус: <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                </div>
                <div>
                    Мое имя: {props.profile.fullName}
                </div>
                <div>
                    Обо мне: {props.profile.aboutMe}
                </div>
                <div>
                    Ищу работу:
                    <img src={props.profile.lookingForAJob ?
                        "https://e7.pngegg.com/pngimages/282/1011/png-clipart-check-mark-graphy-tick-others-angle-plant-stem.png" :
                        "https://e7.pngegg.com/pngimages/940/381/png-clipart-red-x-logo-computer-icons-error-nuvola-wrong-miscellaneous-heart.png"}
                        className={profileInfoCss.imgLookingForAJob} />
                </div>
                <div>
                    Мои контакты:
                </div>
                {viewContacts(props.profile.contacts)}
            </div>
        </div>
    );
};

export default ProfileInfo;
