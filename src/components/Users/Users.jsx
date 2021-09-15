import * as axios from 'axios';
import React from 'react';
import userPhoto from '../../assets/images/default_avatar.jpg'
import style from './Users.module.css';



//Классовая компонента - устарелка - не рекомендуется использовать
class Users extends React.Component {
    

    constructor(props){
        super(props);                   //Если только эта операция - конструктор можно опустить

    }

    getUsers =() =>{
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>{
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });        
    }

    componentDidMount(){
        this.getUsers();                //Вызывается при создании компоненты
    };
    

    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response =>{
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });        

    }

    render()                                    //React будет вызывать этот метод при отрисовке, возвращать должен jsx
    {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages =[];
        for (let i=1;i<=pagesCount; i++){
            pages.push(i);
        }
        return <div>
            <div>
                {pages.map(p => <span className={this.props.currentPage===p && style.selectedPage}
                onClick={(e)=>{this.onPageChanged(p)}}>{p}</span>)}
            </div>
            {
            this.props.users.map(u=> <div key={u.id}>
                        <span>
                            <div><img src={u.photos.small !=null ? u.photos.small: userPhoto}/></div>
                            <div>{
                                u.followed?
                                <button onClick={()=>{this.props.unfollow(u.id)}}>Unfollow</button>:
                                <button onClick={()=>{this.props.follow(u.id)}}>Follow</button>
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
    }
}

export default Users;