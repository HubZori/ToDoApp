import s from "./Registration.module.css";
import Button from "../../elements/Button/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Input from "../../elements/Input/Input";
import LoginForm from "../Login/LoginForm";
import { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !birthday || !password || !confirmPassword) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      localStorage.setItem("Username", JSON.stringify(username));
      console.log("Save In Local Storage");
      setLogin(!login);
    }
  };

  const handleClick = () => {
    setLogin(!login);
  };

  return (
    <div>
      {login ? (
        <form className={s.form} onSubmit={handleSubmit}>
          <h3>New account</h3>
          <Input
            type="text"
            label="Username"
            placeholder="Username"
            pattern="^[A-Za-z0-9]{3,16}$"
            required={true}
            error={
              "Имя пользователя должно содержать от 3 до 16 символов и не должно содержать никаких специальных символов!"
            }
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Input
            type="email"
            label="email"
            placeholder="Email"
            required={true}
            error={"Введите корректный email адрес!"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            type="date"
            label="Birthday"
            placeholder="Birthday"
            onChange={(e) => {
              setBirthday(e.target.value);
            }}
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            error={
              "Пароль должен состоять из 8-20 символов и содержать как минимум 1 букву, 1 цифру и 1 специальный символ!"
            }
            label="Password"
            pattern={`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`}
            required={true}
          />
          <Input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Password"
            error={"Password don't match!"}
            label="Confirm Password"
            pattern={password}
            required={true}
          />

          <Button type="submit">Sing Up</Button>
          {flag && (
            <alert className={s.alert}>Пожалуйста, заполните каждое поле</alert>
          )}

          <p onClick={handleClick}>login in?</p>

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
        <Link to="/login">
          <LoginForm />
        </Link>
      )}
    </div>
  );
};

export default Registration;
