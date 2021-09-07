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
            ]
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
    addPost() 
    {
        let newPost = 
        {
            id:5,
            header: 'Newpost',
            text: this._state.profilePage.newPostText,
            likeCounts: 0
        };
        this._state.profilePage.postsData.push(newPost);   
        this._state.profilePage.newPostText= '';
        this._callSubscriber(this._state);
    },
    changeNewPostText (postMessage) 
    {
        this._state.profilePage.newPostText= postMessage;
        this._callSubscriber(this._state);
    },
    subscribe(observer) 
    {
        this._callSubscriber=observer; //Паттерн наблюдатель
    }


}



export default store;
window.store=store;