import style from  './profile.module.css';
import MyPosts from './MyPosts/myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
 

const Profile = (props) => {    
    return (        
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.profilePage.postsData}/>

        </div>
    );
}

export default Profile;