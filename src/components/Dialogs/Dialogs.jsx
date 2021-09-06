import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message.jsx';
import style from  './Dialogs.module.css';


const Dialogs = (props) => {

    let dialogsContent = props.messagesPage.dialogsData.map(dialog => <Dialog id={dialog.id} name={dialog.name} />)
    let messagesContent = props.messagesPage.messagesData.map(message => <Message text={message.message} />);
    let addMessageButtom = React.createRef();
    
    let addMessage =() =>
    {
        let text = addMessageButtom.current.value;
        alert(text);
    }

    return (

        <div className={style.dialogs}>
           <div className={style.dialogItems}>
                {dialogsContent}
           </div>
           <div className={style.messages}>
                <div>
                    <div><textarea ref={addMessageButtom}></textarea></div>
                    <div><button onClick={addMessage}>Send</button></div>
                </div>
                {messagesContent}               
           </div>
        </div>
    );
}

export default Dialogs;