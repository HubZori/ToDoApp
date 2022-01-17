import s from "./LoginForm.module.css";
import Button from "../../elements/Button/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Input from "../../elements/Input/Input";
import {Link} from "react-router-dom";

const LoginForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form className={s.form} onSubmit={handleSubmit}>
                <h3>Login Here</h3>
                <Input
                    type="text"
                    label="Username"
                    placeholder="Username"
                />
                <Input
                    type="password"
                    label="Password"
                    placeholder="Password"
                />

                <Link to="/profile">
                    <Button>Log In</Button>
                </Link>
                <ul className={s.singUpBtn}>
                    <li>
                        <Link to="/registration">Sing Up</Link>
                    </li>
                </ul>
                <div className={s.social}>
                    <ul className={s.ul}>
                        <li>
                            <a href="https://www.google.com">
                                <GoogleIcon/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com">
                                <FacebookIcon/>
                            </a>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
