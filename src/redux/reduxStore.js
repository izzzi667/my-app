import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMuddleware from "redux-thunk";


let reducers=combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    users: usersReducer,
    auth: authReducer
});



let store= createStore(reducers, applyMiddleware(thunkMuddleware));

export default store;

