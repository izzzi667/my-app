import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message.jsx';
import style from  './Dialogs.module.css';
import { AddMessageActionCreator, onMessageChangeActionCreator } from '../../redux/state';


const Dialogs = (props) => {

    debugger;
    let dialogsContent = props.messagesPage.dialogsData.map(dialog => <Dialog id={dialog.id} name={dialog.name} />)
    let messagesContent = props.messagesPage.messagesData.map(message => <Message text={message.message} />);
    let addMessageButtom = React.createRef();
    
    let addMessage =() =>
    {        
        props.dispatch(AddMessageActionCreator());
    }

    let modifyNewMessage = () =>
    {        
        let text = addMessageButtom.current.value;
        props.dispatch(onMessageChangeActionCreator(text));
    }

    return (

        <div className={style.dialogs}>
           <div className={style.dialogItems}>
                {dialogsContent}
           </div>
           <div className={style.messages}>
                <div>
                    <div><textarea ref={addMessageButtom} onChange={modifyNewMessage} value={props.messagesPage.newMessageText}></textarea></div>
                    <div><button onClick={addMessage}>Send</button></div>
                </div>
                {messagesContent}               
           </div>
        </div>
    );
}

export default Dialogs;