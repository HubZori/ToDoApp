import c from "./LoginForm.module.css";
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
        <button className={c.loginButton}>Log In</button>
        <div className={c.social}>
          <div className={c.go}>
            <i>
              <GoogleIcon />
            </i>
          </div>
          <div className={c.fb}>
            <i></i> <FacebookIcon />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
