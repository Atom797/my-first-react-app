import React from 'react';
import {updateNewMessageTextActionCreator, addMessageActionCreator} from '../../redux/dialogsReducer'
import dialogsCss from './Dialogs.module.css'
import DialogItem from './DialogItem/Dialog';
import MessageItem from './Message/Message'

const Dialogs = (props) => {
    let dialogsItems = props.dialogsData.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} profileAvatar={dialog.profileAvatar} />);

    let messagesItems = props.dialogsData.messages.map(message => <MessageItem message={message.message} idSender={message.idSender} idRecipient={message.idRecipient} />)

    let addNewMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={dialogsCss.dialogs}>
            <div className={dialogsCss.listDialogs}>
                <ol className={dialogsCss.dialogsItems}>
                    {dialogsItems}
                </ol>
            </div>
            

            <div className={dialogsCss.messages}>
                {messagesItems}
            </div>

            <div className={dialogsCss.newMessage}>

                <div>
                    <textarea onChange={onMessageChange} value={props.dialogsData.newTextMessage} />
                </div>

                <div>
                    <button onClick={addNewMessage}>Add post</button>
                </div>

            </div>

        </div>
    )
}

export default Dialogs;