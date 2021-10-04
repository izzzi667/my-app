import React from 'react'
import { connect } from 'react-redux';
import { userLogoff } from '../../redux/authReducer.js';
import Header from './header.jsx';


class HeaderContainer extends React.Component{
    componentDidMount(){
    }
    
    render(){
        return  <Header {...this.props} />
    }

}



const mapStateToProps=(state)=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {userLogoff})(HeaderContainer);

