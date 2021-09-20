import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../Common/Preloader';


//Классовая компонента - устарелка - не рекомендуется использовать
class UsersContainerComponent extends React.Component {
    

    constructor(props){
        super(props);                   //Если только эта операция - конструктор можно опустить

    }

    getUsers =() =>{
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>{
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });        
    }

    componentDidMount(){
        this.getUsers();                //Вызывается при создании компоненты
    };
    

    onPageChanged = (pageNumber) =>{
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response =>{
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });        

    }

    render()                                    //React будет вызывать этот метод при отрисовке, возвращать должен jsx
    {
        
        return <div>
        {this.props.isFethcing ? <Preloader />: null} 
        <Users totalUsersCount={this.props.totalUsersCount} 
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            follow = {this.props.follow}
            unfollow = {this.props.unfollow}
        />
        </div>

    }
}


let mapStateToProps= (state) =>
{
    return  {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFethcing: state.users.isFethcing
    }
}
/*
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) =>{
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFethcing) =>{
            dispatch(toggleIsFetchingAC(isFethcing))
        }
}
};






const UsersContainer= connect(mapStateToProps,mapDispathcToProps)(UsersContainerComponent);



export default UsersContainer;
*/

//Сокращенная записить mapDispathToProps
export default connect(mapStateToProps, {follow, unfollow, setUsers,setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainerComponent);