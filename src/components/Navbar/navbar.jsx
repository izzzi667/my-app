import * as React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './navbar.module.css';



let activeClass = `${classes.item} ${classes.active}`

const Navbar = () => {

    return (

        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to ='/profile' activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to ='/dialogs' activeClassName={classes.active}>Dialogs</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to ='/users' activeClassName={classes.active}>Users</NavLink>
            </div>
            <div className={classes.item} >
                <NavLink to ='/news' activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item} >
                <NavLink to ='/settings' activeClassName={classes.active}>Settings</NavLink>
            </div>
            <div className={classes.item} >
                <NavLink to ='/coins' activeClassName={classes.active}>Coins</NavLink>
            </div>


            
            
        </nav>
    );
}

export default Navbar;