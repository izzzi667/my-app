import { NavLink } from 'react-router-dom';
import style from './header.module.css';

const Header = (props)  =>
{
    
    return(
    
        <header className={style.header}>
            <img src="https://via.placeholder.com/50" />
            <div className={style.loginBlock}>
                {props.isAuth ? <div>Hello, {props.login} <button onClick={props.userLogoff}>Logout</button></div>: <NavLink to={'/login'}>Login</NavLink>}
            </div>
                
                
        </header>
    );

}

export default Header;

