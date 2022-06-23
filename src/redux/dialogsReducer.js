const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
    dialogs: [
        { id: 0, name: "Зульфия", profileAvatar: "https://www.1zoom.ru/prev2/138/137683.jpg" },
        { id: 1, name: "Бабашан", profileAvatar: "https://shutnikov.club/wp-content/uploads/2019/12/054a2c6c723ecc37d1e8b27c420354ec.png" },
        { id: 2, name: "Тимур", profileAvatar: "https://www.meme-arsenal.com/memes/54e922a5757c64f82fce6d2172143f8c.jpg" }
    ],

    messages: [
        { id: 0, message: "Привет!" },
        { id: 1, message: "Хай! БРО!" },
        { id: 2, message: "Го гулять весело!" }
    ],
    newTextMessage: '',
}

const dialogsReducer = (state=initialState, action) =>{
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