import s from "../Logo/Logo.module.css";
import logo from "../../../src/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className={s.logoContainer}>
      <Link to="/">
        <img src={logo} className={s.logo} alt="logo" />
      </Link>
      <div className={s.logoTitle}>Servycing</div>
    </div>
  );
};

export default Logo;
