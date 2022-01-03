import c from "./Registration.module.css";
import Button from "../../elements/Button";
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
