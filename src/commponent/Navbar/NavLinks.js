import { NavLink } from "react-router-dom";
import c from "../Navbar/AppNav.module.css"
const NavLinks = (props) => {


    return (
        <ul>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <NavLink to="/" activeClassName="activeLink" className={c.link}>
                    Home
                </NavLink>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <NavLink to="/Todolist" className={c.link}>
                    todolist
                </NavLink>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <NavLink to="/login" className={c.link}>
                    login
                </NavLink>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <NavLink to="/registration" className={c.link}>
                    registration
                </NavLink>
            </li>
        </ul>
    );
}
export default NavLinks