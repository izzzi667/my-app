import React from "react";
import Profile from './profile'
import { connect } from 'react-redux';
import { setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { Redirect } from 'react-router';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


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
        if(!this.props.isAuth) return <Redirect to={'/Login'} />
        return(
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}


let AuthRedirectComponent = withAuthRedirect(ProfileContainer); //HOC

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
});

let whithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps,{setUserProfile})(whithUrlDataContainerComponent);

