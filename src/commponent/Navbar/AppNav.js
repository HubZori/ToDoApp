import { NavLink } from "react-router-dom";
import "../Navbar/AppNav.css";

const AppNav = () => {
  return (
    <nav className="navBar">
      <div className="item">
        <NavLink to="/Todolist" activeClassName="activeLink">
          <span>todolist</span>
        </NavLink>
        <NavLink to="/login">login</NavLink>
        <NavLink to="/registration">registration</NavLink>
      </div>
    </nav>
  );
};

export default AppNav;

