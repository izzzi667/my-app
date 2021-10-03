import { stopSubmit } from "redux-form";
import { authApi } from "../api/api";

const SET_USER_DATA='SET_USER_DATA';
const USER_LOGIN ='USER_LOGIN';
const USER_LOGOFF='USER_LOGOFF';

let initialState ={
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state=initialState, action) =>{
    switch (action.type) {        
        case SET_USER_DATA:
            debugger;
            return{...state, ...action.data, isAuth: action.data.isAuth}    
        case USER_LOGOFF:
            return{...state, ...action.data, isAuth: false}
        case USER_LOGIN:
            return{...state, ...action.data, isAuth: true}    
        default:
            return state;
    }
}


export const setUserDataSuccess = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}})

export const setUserData = () =>
{
    return (dispatch) => 
    {        
        authApi.getAuth().then(response =>{            
            if(response.data.resultCode===0){
                let {id, login, email} = response.data.data;
                dispatch(setUserDataSuccess(id,login,email,true));
                }
            }
        )
    }    
}


export const userLogin = (email, password, rememberMe) => {
  

    return (dispatch) =>
    {
        authApi.login(email, password, rememberMe).then(response=>{
            if(response.data.resultCode===0){               
                dispatch(setUserData());
            }
            else 
            {
                let message =response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit('loginForm', {_error: message}));
            }            
        })
        
    }
}

export const userLogoff = () =>
{
    return(dispatch) =>
    {
        authApi.logoff().then(response=>{
            if(response.data.resultCode===0){               
                dispatch(setUserDataSuccess(null,null,null,false));
            }  
        })
    }
}


export default authReducer;