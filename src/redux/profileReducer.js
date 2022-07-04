const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postData: [
        { id: 0, message: "Hi! Nice dic", likesCount: 1, avatar: "https://img4.goodfon.ru/wallpaper/nbig/4/1b/kapitan-amerika-amerika-kapitan-shchit-zvezda-captain-americ.jpg" },
        { id: 0, message: "Thanks!", likesCount: 2, avatar: "https://i.pinimg.com/474x/cb/2f/e7/cb2fe787ad597bef4c6238c6bdc1d5b6.jpg" }
    ],
    newTextForPost: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newTextForPost,
                likesCount: 1,
                avatar: "https://bipbap.ru/wp-content/uploads/2021/06/5758596.jpg"
            }
            return {
                ...state,
                postData:[...state.postData, newPost],
                newTextForPost: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newTextForPost: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return{
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;