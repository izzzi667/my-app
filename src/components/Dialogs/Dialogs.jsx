import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message.jsx';
import style from  './Dialogs.module.css';
import { AddMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogsReducer';


const Dialogs = (props) => {

    let dialogsContent = props.dialogData.map(dialog => <Dialog id={dialog.id} name={dialog.name} key={dialog.id} />)
    let messagesContent = props.messageData.map(message => <Message text={message.message} key={message.id}/>);  
    
    let addMessage =() =>
    {        
        props.addMessage();
    }

    let modifyNewMessage = (event) =>
    {        
        let text = event.target.value;                                      //Вариант использования без ref
        props.modifyNewMessage(text);
    }

    return (
        <div className={style.dialogs}>
           <div className={style.dialogItems}>
                {dialogsContent}
           </div>
           <div className={style.messages}>
                {messagesContent}               
                <hr />
                <div>
                    <div><textarea onChange={modifyNewMessage} value={props.newMessageText}></textarea></div>
                    <div><button onClick={addMessage}>Send</button></div>
                </div>
           </div>
        </div>
    );
}

export default Dialogs;