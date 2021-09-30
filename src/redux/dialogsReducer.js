const ADD_MESSAGE ='ADD-MESSAGE';
//const UPDATE_NEW_MESSAGE_TEXT ='UPDATE-NEW-MESSAGE-TEXT';


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
    ]//,
    //newMessageText: ''
}

const dialogsReducer = (state=initialState, action) =>{
    
    

    switch (action.type) {
        case ADD_MESSAGE:{

                return {...state, 
                                messagesData: [...state.messagesData, {id:6, message: action.newMessageBody}]//,    //Аналогично последующему newState.messagesData.push(newMessage);
                                //newMessageText:''                                                                //newState.newMessageText='';
                };      //Поверхностное копирование - необходимо копировать только то, что нужно изменить                   
                                
            }
        /*case UPDATE_NEW_MESSAGE_TEXT:{
                return {...state, newMessageText: action.message };                                
            }*/
        default:
            return state;            
    }      
  
}


export const AddMessageActionCreator = (newMessageBody)=> ({type: ADD_MESSAGE, newMessageBody });
//export const onMessageChangeActionCreator  = (text)=>({type: UPDATE_NEW_MESSAGE_TEXT,message: text });


export default dialogsReducer;