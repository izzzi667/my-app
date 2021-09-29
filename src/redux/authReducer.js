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
            return{...state, ...action.data, isAuth: true}    
        case USER_LOGOFF:
            return{...state, ...action.data, isAuth: false}
        case USER_LOGIN:
            return{...state, ...action.data, isAuth: true}    
        default:
            return state;
    }
}


export const setUserDataSuccess = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})

export const setUserData = () =>
{
    return (dispatch) => 
    {        
        authApi.getAuth().then(response =>{            
            if(response.data.resultCode===0){
                let {id, login, email} = response.data.data;
                dispatch(setUserDataSuccess(id,login,email));
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
                let {id, login, email} = response.data.data;
                dispatch(setUserDataSuccess(id,login,email));
            }            
        })
    }
}


export default authReducer;