import s from "./Registration.module.css";
import Button from "../../elements/Button/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Input from "../../elements/Input/Input";
import {Link} from "react-router-dom";
import {useState} from "react";

const Registration = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

    };
    const [confirmPassword, setConfirmPassword] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            <form className={s.form} onSubmit={handleSubmit}>
                <h3>New account</h3>
                <Input
                    type="text"
                    label="Username"
                    placeholder="Username"
                    pattern="^[A-Za-z0-9]{3,16}$"
                    required={true}
                    error={'Имя пользователя должно содержать от 3 до 16 символов и не должно содержать никаких специальных символов!'}
                />
                <Input
                    type="email"
                    label="email"
                    placeholder="Email"
                    required={true}
                    error={'Введите корректный email адрес!'}
                />
                <Input
                    type="date"
                    label="Birthday"
                    placeholder="Birthday"
                />
                <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    error={'Пароль должен состоять из 8-20 символов и содержать как минимум 1 букву, 1 цифру и 1 специальный символ!'}
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
                <Link to="/login">
                    <Button>Sing Up</Button>
                </Link>
                <div className={s.social}>
                    <ul className={s.ul}>
                        <li>
                            <a href="https://www.google.com">
                                <GoogleIcon/>
                            </a>
                        </li>
                        <li>
                            <a href="/https://www.facebook.com">
                                <FacebookIcon/>
                            </a>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    );
};

export default Registration;
