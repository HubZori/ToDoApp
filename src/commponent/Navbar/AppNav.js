import { NavLink } from "react-router-dom";
import "../TodoList/TodoList.css";
const AppNav = () => {
  return (
    <nav className="navBar">
      <div className="item">
        <NavLink to="/Todolist" activeClassName="activeLink">
          <span>todolist</span>
        </NavLink>
        <NavLink to="/login">login</NavLink>
      </div>
    </nav>
  );
};

export default AppNav;
{
  /* <nav className="navBar">
          <Link to="/todolist">TodoList</Link>
          <Link to="/invoices">Invoices</Link>
          <Link to="/expenses">Expenses</Link>
          <Link to="/login">login</Link>
        </nav> */
}
