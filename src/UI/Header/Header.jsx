import React, {useContext} from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import classes from './Header.module.css';
import Button from "../Button/Button";
import {AuthContext} from "../../context";

const Header = () => {

    const {setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
        navigate('/login');
    };

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <Link to="/" className={classes.logo}>
                    Posts App
                </Link>
                <nav className={classes.nav}>
                    <NavLink
                        to="/"
                        className={({isActive}) => isActive ? `${classes.navLink} ${classes.active}` : classes.navLink}
                    >
                        Posts
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({isActive}) => isActive ? `${classes.navLink} ${classes.active}` : classes.navLink}
                    >
                        About
                    </NavLink>
                    <Button onClick={logout}>Log out</Button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
