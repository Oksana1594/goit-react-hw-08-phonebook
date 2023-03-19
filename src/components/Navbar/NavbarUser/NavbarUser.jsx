import { useSelector, useDispatch } from "react-redux";
import css from './navbar-user.module.css'

import { logout } from "redux/auth/auth-operation";
import { getName } from "redux/auth/auth-selector";

const NavbarUser = () => {
    const dispatch = useDispatch();
        const onLogOut = () => {
        dispatch(logout())
    }
    const { name } = useSelector(getName);
    return (
        <div className={css.position}>
           {name}, <button className={css.btn} onClick={onLogOut}>Log Out</button>
    </div>
)
}

export default NavbarUser;