import React from 'react';
import Message from './Message/Message.jsx';
import { AddMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs.jsx';


const DialogsContainer = (props) => {
   
    let state = props.store.getState();

    let addMessage =() =>
    {        
        props.store.dispatch(AddMessageActionCreator());
    }

    let modifyNewMessage = (text) =>
    {                
        props.store.dispatch(onMessageChangeActionCreator(text));
    }

    return (
        <Dialogs dialogData = {state.messagesPage.dialogsData} messageData={state.messagesPage.messagesData} newMessageText={state.messagesPage.newMessageText}
            modifyNewMessage = {modifyNewMessage} addMessage={addMessage}
        />
    );
}

export default DialogsContainer;

