import { NavLink } from 'react-router-dom';
import style from './Dialog.modle.css';

const Dialog = (props) => 
{
    let path='/dialogs/'+props.id;
    return(
        <div className={style.dialog}>
            <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;
