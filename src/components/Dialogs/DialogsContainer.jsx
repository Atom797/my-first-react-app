import React from 'react';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogsReducer'
import dialogsCss from './Dialogs.module.css'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {



    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let addNewMessage = () => {
                    store.dispatch(addMessageActionCreator());
                };

                let onMessageChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCreator(text));
                }

                return <Dialogs addNewMessage={addNewMessage}
                    onMessageChange={onMessageChange}
                    dialogsData={state.dialogPage} />
            }}

        </StoreContext.Consumer>
    )
}

export default DialogsContainer;