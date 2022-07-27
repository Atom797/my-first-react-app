const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: action.newMessageBody }],
            }
        }
        default:
            return state
    }
};

export const addMessageActionCreator = (newMessageBody) => ({ type: ADD_NEW_MESSAGE, newMessageBody });

export default dialogsReducer;