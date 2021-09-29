import React from "react";
import { Field, reduxForm } from "redux-form";



const Login =  (props) =>
{
    const onSubmit =(formData) =>{
        console.log(formData);
    }

    return <div><h2>Login form</h2><LoginReduxForm onSubmit={onSubmit}/></div>
}


const LoginForm = (props)=>
{

    return  <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={"Login"} name ={"login"} component={"input"} /></div>
        <div><Field placeholder={"Password"} name={"password"} component={"input"} /></div>
        <div><Field component={"input"} name={"rememberMe"} type={"checkbox"} />Remember me</div>
        <div><button>Login</button></div>
    </form>
}

const LoginReduxForm =  reduxForm({form: 'loginForm'})(LoginForm);


export default Login;