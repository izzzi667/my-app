  let state={
    profiePage: {
        postsData: [
            {id:0, header:'Привет', text:'Текст поста 1-2-3', likeCounts:5},
            {id:1, header:'Привет 2', text:'Текст поста 1-2-3-4', likeCounts:3},
            {id:2, header:'Привет 3', text:'ААА Текст поста 1-2-3-4', likeCounts:3}
        ]
    },
    messagesPage: {
        dialogsData: [
            {id: 1, name: 'UserName 1'},
            {id: 2, name: 'UserName 2'},
            {id: 3, name: 'UserName 3'}
        ]    
        , messagesData:[
            {id: 1, message: 'Текст 1'},
            {id: 1, message: 'Текст 2'},
            {id: 1, message: 'Текст 33'}
        ]
    }
};


export default state;