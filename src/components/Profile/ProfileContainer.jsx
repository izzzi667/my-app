import React from "react";
import Profile from './profile'
import { connect } from 'react-redux';
import { setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { Redirect } from 'react-router';


class ProfileContainer extends React.Component{
    
    
    componentDidMount()
    {        
        let userId= this.props.match.params.userId;
        if(!userId) 
        {
            userId=2;
        }
        this.props.setUserProfile(userId);
    }
    
    render()
    {
        debugger;
        if(!this.props.isAuth) return <Redirect to={'/Login'} />
        return(
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let whithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps,{setUserProfile})(whithUrlDataContainerComponent);

