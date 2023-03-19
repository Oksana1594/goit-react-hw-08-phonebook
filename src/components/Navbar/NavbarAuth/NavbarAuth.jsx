import { NavLink } from "react-router-dom";

import css from './navbar-auth.module.css'

const NavbarAuth = () => {
    return (
        <div className={css.navbar}>
            <NavLink className={css.link} to="/register">Register</NavLink>
            <NavLink className={css.link} to="/login">Login</NavLink>
        </div>
    )

    
};

export default NavbarAuth;