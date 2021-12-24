import { NavLink } from "react-router-dom";

const NavLinks = (props) => {


    return (
        <ul>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <NavLink to="/Todolist" activeClassName="activeLink">
                    todolist
                </NavLink>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <NavLink to="/login">
                    login
                </NavLink>
            </li>
            <li onClick={() => props.isMobile && props.closeMobileMenu()}>
                <NavLink to="/registration">
                    registration
                </NavLink>
            </li>
        </ul>
    );
}
export default NavLinks