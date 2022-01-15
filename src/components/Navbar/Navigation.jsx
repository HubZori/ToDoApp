import s from "./AppNav.module.css";
import NavLinks from "./NavLinks";

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <NavLinks />
    </nav>
  );
};

export default Navigation;
