import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message.jsx';
import style from  './Dialogs.module.css';
import { Redirect } from 'react-router';
import { Field, reduxForm } from "redux-form";
import { Textarea } from '../Common/FormsCrontorls/FormsControls';
import { maxLenghtCreator, requiredField } from '../../utils/validators/validators';

const maxLen20 = maxLenghtCreator(20);


const Dialogs = (props) => {

    if(!props.isAuth) return <Redirect to={'/Login'} />
    let dialogsContent = props.dialogData.map(dialog => <Dialog id={dialog.id} name={dialog.name} key={dialog.id} />)
    let messagesContent = props.messageData.map(message => <Message text={message.message} key={message.id}/>);  
    
    /*let addMessage =() =>
    {        
        props.addMessage();
    }

    let modifyNewMessage = (event) =>
    {        
        let text = event.target.value;                                      //Вариант использования без ref
        props.modifyNewMessage(text);
    }*/
    
    let addNewMessage=(values) =>
    {
        //alert(values.newMessageBody);
        props.addMessage(values.newMessageBody);

    }

    return (
        <div className={style.dialogs}>
           <div className={style.dialogItems}>
                {dialogsContent}
           </div>
           <div className={style.messages}>
                {messagesContent}               
                <hr />
                <AddMessageReduxForm onSubmit={addNewMessage}/>
           </div>
        </div>
    );
}



const AddMessageForm = (props) =>{
    return <form onSubmit={props.handleSubmit}>
        va
        <Field component = {Textarea} name ='newMessageBody' placeholder='Enter you message'  validate={[maxLen20, requiredField]} />    
    <div><button>Send</button></div>
</form>
}

const AddMessageReduxForm = reduxForm({form: 'dialogForm'})(AddMessageForm);
export default Dialogs;

