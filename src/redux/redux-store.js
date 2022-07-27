import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    authUser: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;