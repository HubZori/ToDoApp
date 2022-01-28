import s from "./LoginForm.module.css";
import Button from "../../elements/Button/Button";
import Profile from "../Profile/Profile";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Input from "../../elements/Input/Input";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const [flag, setFlag] = useState(false);
  const [profile, setProfile] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    let pass = localStorage.getItem("Password").replace(/"/g, "");

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("Empty");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setProfile(!profile);
      setFlag(false);
    }
  };

  return (
    <div>
      {profile ? (
        <form className={s.form} onSubmit={handleLogin}>
          <h3>Login Here</h3>
          <Input
            type="text"
            label="Email"
            placeholder="Email"
            onChange={(e) => setEmaillog(e.target.value)}
          />
          <Input
            type="password"
            label="Password"
            placeholder="Password"
            onChange={(e) => setPasswordlog(e.target.value)}
          />

          <Button type="submit">Log In</Button>

          {flag && <alert>НЕВЕРНЫЙ EMAIL ИЛИ ПАРОЛЬ</alert>}

          <ul className={s.singUpBtn}>
            <li>
              <Link to="/registration">Sing Up</Link>
            </li>
          </ul>

          <div className={s.social}>
            <ul className={s.ul}>
              <li>
                <a href="https://www.google.com">
                  <GoogleIcon />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com">
                  <FacebookIcon />
                </a>
              </li>
            </ul>
          </div>
        </form>
      ) : (
        <Link to="/profile">
          <Profile />
        </Link>
      )}
    </div>
  );
};

export default LoginForm;
