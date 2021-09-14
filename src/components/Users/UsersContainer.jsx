import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/usersReducer';


let mapStateToProps= (state) =>
{
    return  {
        users: state.users.users
    }
}

let mapDispathcToProps = (dispatch) => 
{
    return{
        follow: (userId)=>{
            dispatch(followAC(userId));
        },
        unfollow: (userId)=> {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users)=> {
            dispatch(setUsersAC(users));
        }
}
};



const UsersContainer= connect(mapStateToProps,mapDispathcToProps)(Users);



export default UsersContainer;