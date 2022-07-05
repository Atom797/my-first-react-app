import {combineReducers, legacy_createStore as createStore} from 'redux'
import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from './usersReducer';
import authReducer from './authReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    authUser: authReducer,
});

let store = createStore(reducers);

export default store;