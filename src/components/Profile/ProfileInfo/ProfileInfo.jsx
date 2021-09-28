import Preloader from '../../Common/Preloader';
import style from  './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

 

const ProfileInfo = (props) => {
    if(!props.profile) {         //null || underfined
        return <Preloader />
    }     

    return (
        <div>            
            <div>
                <img src="https://via.placeholder.com/1000x300" />
            </div>
            <div className={style.descriptionBlock}>
                <h3>{props.profile.fullName}</h3>
                <img src={props.profile.photos.large}></img>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>{props.profile.aboutMe}</div>
            </div>

        </div>
    );
}

export default ProfileInfo;