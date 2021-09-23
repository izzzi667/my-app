import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers=combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    users: usersReducer,
    auth: authReducer
});



let store= createStore(reducers);

export default store;

