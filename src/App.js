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


//Babel - транспилятор - транспилирует jsx в js

const App = (props) => {    
  return (        
    <BrowserRouter>
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path = '/profile/:userId' render = {()=> <ProfileContainer /> } />
        <Route path ='/dialogs' render = {()=> <DialogsContainer /> } />        
        <Route path ='/users' render  ={()=> <UsersContainer /> } />
        <Route path ='/news' component={News} />        
        <Route exact path ='/settings' component={Settings} />        
      </div>        
      <Footer />
    </div>
    </BrowserRouter>
  );
}



export default App;
