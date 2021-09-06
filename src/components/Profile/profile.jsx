import style from  './profile.module.css';
import MyPosts from './MyPosts/myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
 

const Profile = (props) => {    
    return (        
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.profilePage.postsData} addPost={props.addPost} newPostText={props.profilePage.newPostText} changeNewPostText={props.changeNewPostText}/>

        </div>
    );
}

export default Profile;