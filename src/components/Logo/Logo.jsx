import c from "../Logo/Logo.module.css";
import logo from "../../../src/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className={c.LogoContainer}>
      <Link to="/">
        <img src={logo} className={c.Logo} alt="logo" />
      </Link>
      <div className={c.LogoTitle}>Servycing</div>
    </div>
  );
};

export default Logo;
