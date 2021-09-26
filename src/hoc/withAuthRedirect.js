import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";



let mapStateToPropsForRedirect=(state)=>
{
    return    {        
        isAuth: state.auth.isAuth
    }
}
//HOC Component

export const withAuthRedirect = (Component) =>
{
    class RedirectComponent extends React.Component{
        render() {    
            
                if(!this.props.isAuth) return <Redirect to={'/Login'} />
                return <Component {...this.props} />                        
        }
    }



    let AuthRedirectComponent=connect(mapStateToPropsForRedirect)(RedirectComponent);
    

    return AuthRedirectComponent;
}

