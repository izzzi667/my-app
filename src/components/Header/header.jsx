import { NavLink } from 'react-router-dom';
import style from './header.module.css';

const Header = (props)  =>
{
    
    return(
    
        <header className={style.header}>
            <img src="https://via.placeholder.com/50" />
            <div className={style.loginBlock}>
                {props.isAuth ? props.login: <NavLink to={'/login'}>Login</NavLink>}
            </div>
                
                
        </header>
    );

}

export default Header;