import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'
import sidebarReducer from './sidebarReducer'
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    authUser: authReducer,
    form: formReducer,
    app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // for chrome extensions REDUX
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware))); // for chrome extensions REDUX
//let store = createStore(reducers, applyMiddleware(thunkMiddleware)); // usual view

export default store;