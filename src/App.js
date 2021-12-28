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
import LoginForm from "./commponent/Login/LoginForm";

import AppNav from "./commponent/Navbar/AppNav";
import Registration from "./commponent/Registration/Registration";
import GetStarted from "./commponent/GettingStarted/GetStarted";
import Footer from "./commponent/Footer/Footer";

const App = (props) => {
  const state = useSelector((state) => ({ ...state }));
  return (
    <div className="app">
      <div className="content_wrap">


        <Router >
          <AppNav />
          <div className="app__content">
            <Routes>
              <Route path="/" element={<GetStarted />} />
            </Routes>
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
        </Router >
      </div>
      <Footer />
    </div>
  );
};
export default App;
