import c from "./Registration.module.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

const Registration = (props) => {
  return (
    <div className={c.registrationWrapper}>
      <div class={c.background}>
        <div class={c.shape}></div>
        <div class={c.shape}></div>
      </div>
      <form className={c.form}>
        <h3>New account</h3>
        <label for="username">Contact</label>
        <input
          type="text"
          placeholder="Mobile number or email address"
          id="contact"
        />
        <label for="username">Username</label>
        <input type="text" placeholder="Username" id="username" />
        <label for="password">New Password</label>
        <input type="password" placeholder="New password" id="password" />
        <button className={c.loginButton}>Sing Up</button>
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

export default Registration;
