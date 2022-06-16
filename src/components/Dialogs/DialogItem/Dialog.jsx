import dialogCss from './Dialog.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div >
            <NavLink to={path} className={setActiveMode}>
                <img src={props.profileAvatar}/>
                <div>
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
}

const setActiveMode = ({ isActive }) => isActive ? dialogCss.active : dialogCss.dialogsItems;

export default DialogItem;