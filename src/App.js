/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import "./App.css";
import { useSelector } from "react-redux";
import TodoList from "./commponent/TodoList/TodoList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


import AppNav from "./commponent/Navbar/AppNav";
import login from "./commponent/login/login";

const App = (props) => {
  const state = useSelector((state) => ({ ...state }));
  return (
    <Router>
      <div className="app">
        <AppNav />

        <div className="app__content">

          <Routes>
            <Route path="/todolist" element={<TodoList className="todo__list" state={state} />} />
          </Routes>
          <Routes>
            <Route path="/login" element={<login />} />
          </Routes>

        </div>

      </div>
    </Router >
  );
};
export default App;
