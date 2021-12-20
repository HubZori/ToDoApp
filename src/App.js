import "./App.css";
import { useSelector } from "react-redux";
import TodoList from "./commponent/TodoList/TodoList";
import { Link } from "react-router-dom";

function App() {
  const state = useSelector((state) => ({ ...state }));
  return (
    <div>
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: "1rem",
          justifyContent: "center",
          background: "#8888",
        }}
      >
        <Link to="/invoices">Invoices</Link> |
        <Link to="/expenses">Expenses</Link>|<Link to="/login">login</Link>
      </nav>
      <div className="app">
        <TodoList state={state} />
      </div>
    </div>
  );
}
export default App;
