import c from "./LoginForm.module.css";
import Button from "../../elements/Button/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Input from "../../elements/Input/Input";
import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
  const [values, setValues] = useState({
    contact: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className={c.loginWrapper}>
      <form className={c.form} onSubmit={handleSubmit}>
        <h3>Login Here</h3>
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <Link to="/profile">
          <Button>Log In</Button>
        </Link>
        <ul class={c.singUpBtn}>
          <li>
            <Link to="/registration">Sing Up</Link>
          </li>
        </ul>
        <div className={c.social}>
          <ul className={c.ul}>
            <li>
              <a href="https://www.google.com">
                <GoogleIcon />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com" disabled>
                <FacebookIcon />
              </a>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
