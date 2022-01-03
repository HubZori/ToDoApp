import c from "./LoginForm.module.css";
import Button from "../../elements/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

const LoginForm = (props) => {
  return (
    <div className={c.loginWrapper}>
      <div class={c.background}>
        <div class={c.shape}></div>
        <div class={c.shape}></div>
      </div>
      <form className={c.form}>
        <h3>Login Here</h3>
        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />
        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <Button>Log In</Button>
        <div className={c.social}>
          <ul className={c.ul}>
            <li>
              <a href="/#0">
                <GoogleIcon />
              </a>
            </li>
            <li>
              <a href="/#0" disabled>
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
