import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader';
import getUsers from '../../api/api'


//Классовая компонента - устарелка - не рекомендуется использовать
class UsersContainerComponent extends React.Component {
    

    constructor(props){
        super(props);                   //Если только эта операция - конструктор можно опустить

    }
    

    componentDidMount(){
        //Вызывается при создании компоненты
        this.props.toggleIsFetching(true);
        getUsers(this.props.currentPage, this.props.pageSize).then(data =>{
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });   
    };
    

    onPageChanged = (pageNumber) =>{
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        getUsers(pageNumber, this.props.pageSize).then(data =>{
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
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