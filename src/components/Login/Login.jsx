import React from "react";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import { userLogin, setUserData} from "../../redux/authReducer";
import { connect } from 'react-redux';
import { Input } from '../Common/FormsCrontorls/FormsControls';
import { maxLenghtCreator, requiredField } from '../../utils/validators/validators';

const maxLen30 = maxLenghtCreator(30);



class LoginContainer extends React.Component{

    constructor(props){
        super(props);                   //Если только эта операция - конструктор можно опустить
    }

    userLogin  = (formData)  => {                
        this.props.userLogin(formData.login, formData.password, true )
        this.props.setUserData();

    }

    render()
    {
        return (<Login userLogin={this.userLogin}/>);
    }
}


const Login =  (props) =>
{
    const onSubmit =(formData) =>{
        console.log(formData);
    }

    return <div><h2>Login form</h2><LoginReduxForm onSubmit={props.userLogin}/></div>
}


const LoginForm = (props)=>
{

    return  <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={"Login"} name ={"login"} component={Input} validate={[maxLen30, requiredField]}/></div>
        <div><Field placeholder={"Password"} name={"password"} component={Input} validate={[maxLen30, requiredField]}/></div>
        <div><Field component={Input} name={"rememberMe"} type={"checkbox"} />Remember me</div>
        <div><button>Login</button></div>
    </form>
}



const LoginReduxForm =  reduxForm({form: 'loginForm'})(LoginForm);


let mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps,{userLogin,setUserData})(LoginContainer);

