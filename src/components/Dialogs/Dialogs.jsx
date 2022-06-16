import dialogsCss from './Dialogs.module.css'
import DialogItem from './DialogItem/Dialog';
import MessageItem from './Message/Message'

const dialogsItems = (props) => props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

const messagesItems = (props) => props.messages.map(message => <MessageItem message={message.message} />)

const Dialogs = (props) => {
    return (
        <div className={dialogsCss.dialogs}>
            <div className={dialogsCss.dialogsItems}>
                {dialogsItems(props)}
            </div>
            <div className={dialogsCss.messages}>
                {messagesItems(props)}
            </div>
        </div>
    )
}

export default Dialogs;