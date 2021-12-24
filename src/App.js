/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import "./App.css";
import { useSelector } from "react-redux";
import TodoList from "./commponent/TodoList/TodoList";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoginForm from "./commponent/login/loginForm";

import AppNav from "./commponent/Navbar/AppNav";
import Registration from "./commponent/registration/registration";

const App = (props) => {
  const state = useSelector((state) => ({ ...state }));
  return (
    <Router>
      <div className="app">
        <AppNav />

        <div className="app__content">

          <Routes>
            <Route path="/todolist" element={<TodoList state={state} />} />
          </Routes>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
          </Routes>
          <Routes>
            <Route path="/registration" element={<Registration />} />
          </Routes>

        </div>

      </div>
    </Router >
  );
};
export default App;
