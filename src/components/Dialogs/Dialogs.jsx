import React from 'react';
import dialogsCss from './Dialogs.module.css'
import DialogItem from './DialogItem/Dialog';
import MessageItem from './Message/Message'
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';

const Dialogs = (props) => {
    let dialogsItems = props.dialogsData.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} profileAvatar={dialog.profileAvatar} />);

    let messagesItems = props.dialogsData.messages.map(message => <MessageItem key={message.id} message={message.message} idSender={message.idSender} idRecipient={message.idRecipient} />)

    let addNewMessage = (values) => {
        props.addNewMessage(values.newMessageBody);
    };

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
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (
        <form className={dialogsCss.newMessage} onSubmit={props.handleSubmit}>

            <div>
                <Field component={Textarea} name="newMessageBody" placeholder="Enter your message"
                    validate={[required, maxLength100]} />
            </div>

            <div>
                <button>Add post</button>
            </div>

        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)

export default Dialogs;