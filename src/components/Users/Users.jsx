import style from './Users.module.css';
import userPhoto from '../../assets/images/default_avatar.jpg'
import React from 'react';
import { NavLink } from 'react-router-dom';



const Users = (props) =>{    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages =[];
    for (let i=1;i<=pagesCount; i++){
        pages.push(i);
    }

    return (
        <div>
        <div>
            {pages.map(p => <span className={props.currentPage===p && style.selectedPage}
            onClick={(e)=>{props.onPageChanged(p)}}>{p}</span>)}
        </div>
        {
        props.users.map(u=> <div key={u.id}>
                    <span>
                        <div><NavLink to={'/profile/'+u.id}><img src={u.photos.small !=null ? u.photos.small: userPhoto}/></NavLink></div>
                        <div>{
                            u.followed?
                            <button disabled ={props.followingInProgress.some(id => id===u.id)} onClick={()=>{                                
                                props.unFollow(u.id);                            
                            }}>Unfollow</button>:
                            <button disabled ={props.followingInProgress.some(id => id===u.id)} onClick={()=>{
                                props.follow(u.id);                                                            
                            }}>Follow</button>
                        }</div>
                    </span>
                    <span>
                        <span><div>{u.name}</div><div>{u.status}</div></span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>
                    </span>
                </div>
        )}
        </div>
    );
}

export default Users;