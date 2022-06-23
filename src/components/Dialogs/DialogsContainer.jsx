import React from 'react';
import {updateNewMessageTextActionCreator, addMessageActionCreator} from '../../redux/dialogsReducer'
import dialogsCss from './Dialogs.module.css'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addNewMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (text)=> {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <Dialogs addNewMessage={addNewMessage} onMessageChange={onMessageChange} dialogsData={state.dialogPage}/>
    )
}

export default DialogsContainer;