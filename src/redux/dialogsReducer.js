const ADD_MESSAGE ='ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT ='UPDATE-NEW-MESSAGE-TEXT';


let initialState =
{
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

const dialogsReducer = (state=initialState, action) =>{
    
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage=
            {
                id:4,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage);
            state.newMessageText='';
            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText=action.message;
            break;    
        default:
            break;
    }  
    return state;
  
}


export const AddMessageActionCreator = ()=> ({type: ADD_MESSAGE });
export const onMessageChangeActionCreator  = (text)=>({type: UPDATE_NEW_MESSAGE_TEXT,message: text });


export default dialogsReducer;