import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from './redux/state';
import {changeNewPostText} from './redux/state';


export let reRenderTree = (state) =>{
    ReactDOM.render(
      <React.StrictMode>
        <App state ={state} addPost={addPost} changeNewPostText={changeNewPostText}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }