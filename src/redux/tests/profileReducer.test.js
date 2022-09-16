import profileReducer, { addPostActionCreator, deletePost } from "../profileReducer";

let state = {
    postData: [
        { id: 0, message: "Hi! Nice dic", likesCount: 1, avatar: "https://img4.goodfon.ru/wallpaper/nbig/4/1b/kapitan-amerika-amerika-kapitan-shchit-zvezda-captain-americ.jpg" },
        { id: 1, message: "Thanks!", likesCount: 2, avatar: "https://i.pinimg.com/474x/cb/2f/e7/cb2fe787ad597bef4c6238c6bdc1d5b6.jpg" }
    ]
};

it('length of post should be incremented', () =>{
    let action = addPostActionCreator("Hi!");
    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(3)
})

it('message of new post should be Hi!', () =>{
    let action = addPostActionCreator("Hi!");
    let newState = profileReducer(state, action);
    expect(newState.postData[2].message).toBe("Hi!")
})

it('after deleting length of messages should be 1', () =>{
    let action = deletePost(1);
    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(1)
})