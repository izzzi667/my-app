import React from 'react';

const Users = (props) =>
{

    if (props.users.length===0){
    props.setUsers(
        [
            {id:0, photoUrl: 'https://via.placeholder.com/50', followed: false, fullName:'Name 1', status:'Status 1', location: {city: 'City 1', country:'Country 1'}},        
            {id:1, photoUrl: 'https://via.placeholder.com/50', followed: true, fullName:'Name 2', status:'Status 2', location: {city: 'City 2', country:'Country 2'}},
            {id:2, photoUrl: 'https://via.placeholder.com/50', followed: false, fullName:'Name 3', status:'Status 3', location: {city: 'City 3', country:'Country 3'}}
        ]);
    }
    let usersContent= props.users.map(u=>{
        return (<div key={u.id}>
            <span>
                <div><img src={u.photoUrl}/></div>
                <div>{
                    u.followed?
                    <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>:
                    <button onClick={()=>{props.follow(u.id)}}>Follow</button>
                }</div>
            </span>
            <span>
                <span><div>{u.fullName}</div><div>{u.status}</div></span>
                <span>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </span>
            </span>
        </div>)
    })
    



    
    return <div>{usersContent}</div>
}

export default Users;