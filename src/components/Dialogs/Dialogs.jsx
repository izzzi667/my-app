import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message.jsx';
import style from  './Dialogs.module.css';
import { AddMessageActionCreator, onMessageChangeActionCreator } from '../../redux/dialogsReducer';


const Dialogs = (props) => {

    let dialogsContent = props.messagesPage.dialogsData.map(dialog => <Dialog id={dialog.id} name={dialog.name} />)
    let messagesContent = props.messagesPage.messagesData.map(message => <Message text={message.message} />);  
    
    let addMessage =() =>
    {        
        props.dispatch(AddMessageActionCreator());
    }

    let modifyNewMessage = (event) =>
    {        
        let text = event.target.value;                                      //Вариант использования без ref
        props.dispatch(onMessageChangeActionCreator(text));
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
                    <div><textarea onChange={modifyNewMessage} value={props.messagesPage.newMessageText}></textarea></div>
                    <div><button onClick={addMessage}>Send</button></div>
                </div>
           </div>
        </div>
    );
}

export default Dialogs;