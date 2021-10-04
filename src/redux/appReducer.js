import { setUserData } from "./authReducer";

const SET_ININTIALIZED='SET_ININTIALIZED';

let inintialState = {isInitialized: false}

const appReducer = (state = inintialState, action) =>  
{
    switch (action.type){
        case SET_ININTIALIZED:
            return {...state, isInitialized: true}
        default:
            return state;
    }
}


export const setInintializedSuccess = () => ({type: SET_ININTIALIZED} )

export const initializeApp = () => (dispatch) =>
{
    let promise = dispatch(setUserData());
    promise.then(()=>{
        dispatch(setInintializedSuccess());
    });

    //Если условий много, то нужно использовать конструкцию Promise.all
    
    
}

export default appReducer;