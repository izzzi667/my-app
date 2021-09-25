import axios from 'axios';
import React from 'react'
import { connect } from 'react-redux';
import { setUserData } from '../../redux/authReducer.js';
import Header from './header.jsx';


class HeaderContainer extends React.Component{
    componentDidMount(){
        this.props.setUserData(); 
    }
    
    render(){
        return  <Header {...this.props} />
    }

}



const mapStateToProps=(state)=>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setUserData})(HeaderContainer);

