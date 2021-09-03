import style from  './ProfileInfo.module.css';

 

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://via.placeholder.com/1000x300" />
            </div>
            <div className={style.descriptionBlock}>Avatar+ desc</div>

        </div>
    );
}

export default ProfileInfo;