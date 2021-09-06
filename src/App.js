import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/header.jsx';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile.jsx';
import News from './components/News/News.jsx'
import Settings from './components/Settings/Settings';



const App = (props) => {  
  return (    
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path = '/profile' render = {()=> <Profile profilePage={props.state.profilePage} addPost={props.addPost} changeNewPostText={props.changeNewPostText} /> } />
        <Route path ='/dialogs' render = {()=> <Dialogs messagesPage={props.state.messagesPage} /> } />
        <Route path ='/news' component={News} />
        <Route exact path ='/settings' component={Settings} />        
      </div>        
      <Footer />
    </div>
    </BrowserRouter>
  );
}


export default App;
