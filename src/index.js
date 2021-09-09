import reportWebVitals from './reportWebVitals';
//import store from './redux/state';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import StoreContext from './storeContext';
import {Provider} from 'react-redux';

  


let reRenderTree = (state) =>{
    ReactDOM.render(           
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
      ,
      document.getElementById('root')
    );
  }

  //Метод Bind позволяет привязать контекст к функции и полноценно использовать this внутри store после вызова коллбэка


reRenderTree(store.getState());
store.subscribe(()=>
{
  let state=store.getState();   //Необходимо, т.к. Redux при подписке не возвращает state, в итоге подписываемся на анонимную функцию
  reRenderTree(state);
});




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 