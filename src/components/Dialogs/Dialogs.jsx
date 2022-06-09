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

let dialogsData = [
    {id:0, name:"Зульфия"},
    {id:1, name:"Бабашан"},
    {id:2, name:"Тимур"}
];

let messagesData = [
    {id: 0, message:"Привет!"},
    {id: 1, message:"Хай! БРО!"},
    {id: 2, message:"Го гулять весело!"}
]

const Dialogs = () => {
    return (
        <div className={dialogsCss.dialogs}>
            <div className={dialogsCss.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            </div>
            <div className={dialogsCss.messages}>
                <MessageItem message={messagesData[0].message} />
                <MessageItem message={messagesData[1].message}/>
                <MessageItem message={messagesData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs;