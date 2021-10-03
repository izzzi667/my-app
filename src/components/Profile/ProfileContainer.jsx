import React from "react";
import Profile from './profile'
import { connect } from 'react-redux';
import { getStatus, setUserProfile, updateStatus } from "../../redux/profileReducer";
import { withRouter } from "react-router-dom";
import { Redirect } from 'react-router';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component{
    
    
    componentDidMount()
    {        
        debugger;
        let userId= this.props.match.params.userId;
        if(!userId) 
        {
            userId=this.props.currentUserId;
        }
        this.props.setUserProfile(userId);
        setTimeout(()=>{},2000);
        this.props.getStatus(userId);
    }
    
    render()
    {
        if(!this.props.isAuth) return <Redirect to={'/Login'} />
        return(
            <Profile {...this.props} profile={this.props.profile} updateStatus= {this.props.updateStatus}/>
        );
    }
}



let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    currentUserId : state.auth.userId,
    isAuth: state.auth.isAuth
});

/*let AuthRedirectComponent = withAuthRedirect(ProfileContainer); //HOC
let whithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
export default connect(mapStateToProps,{setUserProfile})(whithUrlDataContainerComponent);*/

export default compose(
    connect(mapStateToProps,{setUserProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

