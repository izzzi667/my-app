import { act } from "react-dom/test-utils";

const FOLLOW ='FOLLOW'; 
const UNFOLLOW ='UNFOLLOW';
const SET_USERS ='SET_USERS';

let initialState={
    users: [
        {id:0, followed: false, fullName:'Name 1', status:'Status 1', location: {city: 'City 1', country:'Country 1'}},        
        {id:1, followed: true, fullName:'Name 2', status:'Status 2', location: {city: 'City 2', country:'Country 2'}},
        {id:2, followed: false, fullName:'Name 3', status:'Status 3', location: {city: 'City 3', country:'Country 3'}}
    ]
};



const usersReducer = (state = initialState, action) =>{
    switch (action.type) {
        case FOLLOW:
            return{
                ...state,
                users: state.users.map(u=> {
                    if(u.id === action.userId)
                    {
                        return {...u, followed: true}       //Перебираем все записи пользователей, если встретится пользователь с id = action.userId, то копируем и меняем этот объект
                    }
                    return u;                               //Не тот объект - просто копируем его
                })
            }
        case UNFOLLOW:
            return{
                ...state, 
                users: state.users.map(u =>{
                    if(u.id === action.userId)
                    {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return{... state, users: [...state.users, ...action.users]}
        default:            
            return state;
    }    
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId });
export const setUsers = (users)=>({type: SET_USERS, users});

export default usersReducer;