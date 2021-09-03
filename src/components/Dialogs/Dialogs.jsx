import Dialog from './Dialog/Dialog';
import Message from './Message/Message.jsx';
import style from  './Dialogs.module.css';





const Dialogs = (props) => {

    let dialogsContent = props.messagesPage.dialogsData.map(dialog => <Dialog id={dialog.id} name={dialog.name} />)
    let messagesContent = props.messagesPage.messagesData.map(message => <Message text={message.message} />);

    return (

        <div className={style.dialogs}>
           <div className={style.dialogItems}>
                {dialogsContent}
           </div>
           <div className={style.messages}>
                {messagesContent}               
           </div>
        </div>
    );
}

export default Dialogs;