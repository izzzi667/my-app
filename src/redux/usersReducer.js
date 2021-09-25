import { act } from "react-dom/test-utils";
import usersApi from '../api/api'

const FOLLOW ='FOLLOW'; 
const UNFOLLOW ='UNFOLLOW';
const SET_USERS ='SET_USERS';
const SET_CURRENT_PAGE='SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT ='SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING ='TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState={
    users: [
      
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFethcing: false,          //Страница в процессе загрузки? 
    followingInProgress: []
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
            return{... state, users: [ ...action.users]}
        case SET_CURRENT_PAGE:
            return{...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return{...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return{...state, isFethcing: action.isFethcing}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return{...state, followingInProgress: 
                action.isFethcing ? 
                [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id != action.userId)}
        default:            
            return state;
    }    
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId });
export const setUsers = (users)=>({type: SET_USERS, users});
export const setCurrentPage = (currentPage)=>({type:SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) =>({type:SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFethcing)=>({type:TOGGLE_IS_FETCHING, isFethcing});
export const toggleFollowingInProgress = (isFethcing, userId) =>({type:TOGGLE_IS_FOLLOWING_PROGRESS, isFethcing, userId})



export const getUsers =(currentPage, pageSize) =>{  
    return (dispatch) =>
    {
        dispatch(toggleIsFetching(true));
        usersApi.getUsersAPI(currentPage, pageSize).then(data =>{
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });   
    }
}


export const follow = (userId) =>{
    return (dispatch) =>
    {
        dispatch(toggleFollowingInProgress(true, userId));
        usersApi.follow(userId).then(
            response =>{
                if(response.data.resultCode==0){
                    dispatch(followSuccess(userId));
                    dispatch(toggleFollowingInProgress(false, userId));
                }
            }
        );
    }
}


export const unFollow = (userId) =>{
    return (dispatch) =>
    {
        dispatch(toggleFollowingInProgress(true, userId));
        usersApi.unFollow(userId).then(                                    
            response =>{
                if(response.data.resultCode==0){
                    dispatch(unfollowSuccess(userId))
                    dispatch(toggleFollowingInProgress(false, userId));
                }                
            }                                    
        );
    }
}

export default usersReducer;