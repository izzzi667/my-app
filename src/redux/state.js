import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


let store = {
    _state:{
        profilePage: {
            postsData: [
                {id:0, header:'Привет', text:'Текст поста 1-2-3', likeCounts:5},
                {id:1, header:'Привет 2', text:'Текст поста 1-2-3-4', likeCounts:3},
                {id:2, header:'Привет 3', text:'ААА Текст поста 1-2-3-4', likeCounts:3}
            ]
            ,newPostText: ''
        },
        messagesPage: {
            dialogsData: [
                {id: 1, name: 'UserName 1'},
                {id: 2, name: 'UserName 2'},
                {id: 3, name: 'UserName 3'}
            ]    
            , messagesData:[
                {id: 1, message: 'Текст 1'},
                {id: 2, message: 'Текст 2'},
                {id: 3, message: 'Текст 33'}
            ],
            newMessageText: ''
        }
    },
    getState()
    {
        return this._state;
    },
    _callSubscriber() 
    {
        console.log('State changed');
    },
    subscribe(observer) 
    {
        this._callSubscriber=observer; //Паттерн наблюдатель
    },
    dispatch(action)    //{type: 'ADD-POST'} action - это объект
    {
        this._state.profilePage=profileReducer(this._state.profilePage, action); //reducer - упрощает обработку action
        this._state.messagesPage= dialogsReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    }
}

 




export default store;
window.store=store;