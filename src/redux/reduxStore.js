import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMuddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';


let reducers=combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer

});



let store= createStore(reducers, applyMiddleware(thunkMuddleware));

export default store;

