import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, unfollowAC } from '../../redux/usersReducer';


let mapStateToProps= (state) =>
{
    return  {
        users: state.users
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
        }
}
};



const UsersContainer= connect(mapStateToProps,mapDispathcToProps)(Users);



export default UsersContainer;