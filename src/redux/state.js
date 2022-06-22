import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

const store = {
    _rerenderEntireTree() { },

    _state: {
        dialogPage: {
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
        },


        profilePage: {
            postData: [
                { id: 0, message: "Hi! Nice dic", likesCount: 1, avatar: "https://img4.goodfon.ru/wallpaper/nbig/4/1b/kapitan-amerika-amerika-kapitan-shchit-zvezda-captain-americ.jpg" },
                { id: 0, message: "Thanks!", likesCount: 2, avatar: "https://i.pinimg.com/474x/cb/2f/e7/cb2fe787ad597bef4c6238c6bdc1d5b6.jpg" }
            ],
            newTextForPost: '',
        },

        sidebar : {},
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._rerenderEntireTree(this._state);
    },
};

export default store;