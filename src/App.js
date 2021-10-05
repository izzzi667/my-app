import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/navbar';
import News from './components/News/News.jsx'
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React, { Component } from 'react';
import { setUserData } from './redux/authReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";
import { initializeApp } from './redux/appReducer';
import Preloader from './components/Common/Preloader';
import CoinsListContainer from './components/Crypto/CoinsListContainer';



//Babel - транспилятор - транспилирует jsx в js

class App extends Component {    
  componentDidMount()
  {
    this.props.initializeApp(); 
  }
  render() {
    if(!this.props.isInitialized)
    {
      return <Preloader />
    }
    return (            

      <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path = '/profile/:userId' render = {()=> <ProfileContainer /> } />
          <Route path = '/profile' render = {()=> <ProfileContainer /> } />
          <Route path ='/dialogs' render = {()=> <DialogsContainer /> } />        
          <Route path ='/users' render  ={()=> <UsersContainer /> } />
          <Route path ='/news' component={News} />        
          <Route path ='/coins' render = {()=> <CoinsListContainer />} />
          <Route exact path ='/settings' component={Settings} />        
          <Route path ='/login' render  ={()=> <Login /> } />
                  
        </div>        
        <Footer />
      </div>
      </BrowserRouter>
      )
  }
}


const mapStateToProps = (state) =>({
  isInitialized: state.app.isInitialized
});


export default compose(
  connect(mapStateToProps, {initializeApp}))(App);
