import MyPostsContainer from './MyPosts/mypostsContainer';
import style from  './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
 

const Profile = (props) => {        
    return (        
        <div>
            <ProfileInfo profile ={props.profile}/>
            <MyPostsContainer />

        </div>
    );
}

export default Profile;

