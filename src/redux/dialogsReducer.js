const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) =>{
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id:3,
                message: state.newTextMessage,
            }
            state.messages.push(newMessage);
            state.newTextMessage = '';
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newTextMessage = action.newText;
            return state
        default:
            return state
    }
};

export const addMessageActionCreator = () => ({type: ADD_NEW_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type:UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;