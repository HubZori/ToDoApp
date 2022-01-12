import c from "./Registration.module.css";
import Button from "../../Elements/Button/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Input from "../../Elements/Input/Input";
import { useState } from "react";

const Registration = () => {
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
      error:
        "Имя пользователя должно содержать от 3 до 16 символов и не должно содержать никаких специальных символов!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      error: "Введите корректный email адрес!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      error:
        "Пароль должен состоять из 8-20 символов и содержать как минимум 1 букву, 1 цифру и 1 специальный символ!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      error: "Password don't match!",
      label: "Confirm Password",
      pattern: values.password,
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
    <div className={c.registrationWrapper}>
      <div class={c.background}></div>
      <form className={c.form} onSubmit={handleSubmit}>
        <h3>New account</h3>
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <Button>Sing Up</Button>
        <div className={c.social}>
          <ul className={c.ul}>
            <li>
              <a href="/#0">
                <GoogleIcon />
              </a>
            </li>
            <li>
              <a href="/#0">
                <FacebookIcon />
              </a>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Registration;
