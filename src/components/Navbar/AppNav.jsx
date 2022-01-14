import Logo from "../Logo/Logo";
import s from "./AppNav.module.css";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const AppNav = () => {
  return (
    <div className={s.navBar}>
      <Logo />
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default AppNav;
