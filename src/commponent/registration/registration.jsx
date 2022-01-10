import c from "./Registration.module.css";
import Button from "../../Elements/Button/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Input from "../../Elements/Input/Input";

const Registration = (props) => {
  return (
    <div className={c.registrationWrapper}>
      <div class={c.background}>
        <div class={c.shape}></div>
        <div class={c.shape}></div>
      </div>
      <form className={c.form}>
        <h3>New account</h3>
        <Input
          type="text"
          placeholder="Mobile number or email address"
          id="contact"
          label="Contact"
        />
        <Input
          type="text"
          placeholder="Username"
          id="username"
          label="Username"
        />
        <Input
          type="password"
          placeholder="New password"
          id="password"
          label="New Password"
        />
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
