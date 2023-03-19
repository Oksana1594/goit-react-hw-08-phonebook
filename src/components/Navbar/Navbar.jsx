
import { useSelector} from "react-redux";
// import { Link } from "react-router-dom";
import NavbarAuth from "./NavbarAuth/NavbarAuth";
import NavbarUser from "./NavbarUser/NavbarUser";


import { isUserLogin } from "redux/auth/auth-selector";

const Navbar = () => {

    const isLogin = useSelector(isUserLogin)


    return (
        <div>
            {/* <Link to="/">Phonebook</Link> */}
             {!isLogin && <NavbarAuth/>}
            {isLogin && <NavbarUser/> }
          
    </div>
)
}

export default Navbar;