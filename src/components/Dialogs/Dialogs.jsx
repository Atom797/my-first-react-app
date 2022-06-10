import { NavLink } from 'react-router-dom';
import dialogsCss from './Dialogs.module.css'

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div >
            <NavLink to={path} className={setActiveMode}>
                {props.name}
            </NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={dialogsCss.message}>
            {props.message}
        </div>
    )
}

const setActiveMode = ({ isActive }) => isActive ? dialogsCss.active : dialogsCss.dialogsItems;

let dialogs = [
    {id:0, name:"Зульфия"},
    {id:1, name:"Бабашан"},
    {id:2, name:"Тимур"}
];

let messages = [
    {id: 0, message:"Привет!"},
    {id: 1, message:"Хай! БРО!"},
    {id: 2, message:"Го гулять весело!"}
]

let dialogsItems = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

let messagesItems = messages.map(message => <MessageItem message={message.message} />)

const Dialogs = () => {
    return (
        <div className={dialogsCss.dialogs}>
            <div className={dialogsCss.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={dialogsCss.messages}>
                {messagesItems}
            </div>
        </div>
    )
}

export default Dialogs;