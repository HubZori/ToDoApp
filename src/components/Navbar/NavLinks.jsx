import { NavLink } from "react-router-dom";
import s from "../Navbar/AppNav.module.css";

const NavLinks = (props) => {
  return (
    <ul>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink to="/" activeClassName="activeLink" className={s.link}>
          Home
        </NavLink>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink to="/todolist" className={s.link}>
          Todolist
        </NavLink>
      </li>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <NavLink to="/login" className={s.link}>
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
