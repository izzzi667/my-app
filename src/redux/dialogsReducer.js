const ADD_MESSAGE ='ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT ='UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) =>{
    
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