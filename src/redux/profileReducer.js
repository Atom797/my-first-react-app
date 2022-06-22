const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profileReducer = (state, action) =>{
    switch(action.type){
        case ADD_POST: 
            let newPost = {
                id: 3,
                message: state.newTextForPost,
                likesCount: 1,
                avatar: "https://bipbap.ru/wp-content/uploads/2021/06/5758596.jpg"
            }
            state.postData.push(newPost);
            state.newTextForPost = '';
            return state;
        case UPDATE_NEW_POST_TEXT: 
            state.newTextForPost = action.newText;
            return state;
        default:
            return state
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;