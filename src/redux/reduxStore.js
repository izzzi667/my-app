import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import thunkMuddleware from "redux-thunk";
import cryptoReducer from './cryptoReducer';
import { reducer as formReducer } from 'redux-form';


let reducers=combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    crypto: cryptoReducer

});



let store= createStore(reducers, applyMiddleware(thunkMuddleware));

export default store;

