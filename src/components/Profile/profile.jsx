import MyPostsContainer from './MyPosts/mypostsContainer';
import style from  './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
 

const Profile = (props) => {        
    return (        
        <div>
            <ProfileInfo profile ={props.profile} status={props.status} updateStatus= {props.updateStatus}/>
            <MyPostsContainer />

        </div>
    );
}

export default Profile;

