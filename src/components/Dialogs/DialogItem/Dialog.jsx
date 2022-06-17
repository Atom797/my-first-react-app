import dialogCss from './Dialog.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <li >
            <NavLink to={path} className={setActiveMode}>
               <img className={dialogCss.imgs} src={props.profileAvatar} />
               {props.name}          
            </NavLink>
        </li>
    )
}

const setActiveMode = ({ isActive }) => isActive ? dialogCss.active : dialogCss.dialogsItems;

export default DialogItem;