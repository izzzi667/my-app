import React from "react";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import { userLogin, setUserData} from "../../redux/authReducer";
import { connect } from 'react-redux';
import { Input } from '../Common/FormsCrontorls/FormsControls';
import { maxLenghtCreator, requiredField } from '../../utils/validators/validators';
import { Redirect } from "react-router";

const maxLen30 = maxLenghtCreator(30);



class LoginContainer extends React.Component{

    constructor(props){
        super(props);                   //Если только эта операция - конструктор можно опустить
    }

    userLogin  = (formData)  => {                
        this.props.userLogin(formData.login, formData.password, formData.rememberMe )
         
    }

    render()
    {
        debugger;        
        return (<Login userLogin={this.userLogin}/>);
    }
}


const Login =  (props) =>
{
        
    if(props.isAuth)
    {
        return <Redirect to={"/profile"} />
    }


    return <div><h2>Login form</h2><LoginReduxForm onSubmit={props.userLogin}/></div>
}


const LoginForm = (props)=>
{

    return  <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={"Login"} name ={"login"} component={Input} validate={[maxLen30, requiredField]}/></div>
        <div><Field placeholder={"Password"} name={"password"} component={Input} validate={[maxLen30, requiredField]} type={"password"} /></div>
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

