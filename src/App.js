/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import ToDoApp from "./components/ToDoApp/ToDoApp";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import AppNav from "./components/Navbar/AppNav.jsx";
import Registration from "./components/Registration/Registration";
import GetStarted from "./components/GettingStarted/GetStarted";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";


const App = () => {



    return (
        <div className="app">
            <div className="contentWrap">
                <Router>
                    <AppNav />
                    <div className="appContent">
                        <Routes>
                            <Route path="/" element={<GetStarted />} />
                        </Routes>
                        <Routes>
                            <Route path="/todolist" element={<ToDoApp />} />
                        </Routes>
                        <Routes>
                            <Route path="/login" element={<LoginForm />} />
                        </Routes>
                        <Routes>
                            <Route path="/registration" element={<Registration />} />
                        </Routes>
                        <Routes>
                            <Route path="/profile" element={<Profile />} />
                        </Routes>
                    </div>
                </Router>
            </div>
            <Footer />
        </div>
    );
};

export default App;
