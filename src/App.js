import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Footer from './components/Footer/Footer';
import Header from './components/Header/header.jsx';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile.jsx';
import News from './components/News/News.jsx'
import Settings from './components/Settings/Settings';
import Users from './Users/Users';


//Babel - транспилятор - транспилирует jsx в js

const App = (props) => {    
  return (        
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path = '/profile' render = {()=> <Profile /> } />
        <Route path ='/dialogs' render = {()=> <DialogsContainer /> } />        
        <Route path ='/users' render  ={()=> <Users /> } />
        <Route path ='/news' component={News} />        
        <Route exact path ='/settings' component={Settings} />        
      </div>        
      <Footer />
    </div>
    </BrowserRouter>
  );
}


export default App;
