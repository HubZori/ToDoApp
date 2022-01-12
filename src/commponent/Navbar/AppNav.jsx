import Logo from "../Logo/Logo";
import c from "./AppNav.module.css"
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const AppNav = () => {
  return (
    <div className={c.navBar}>
      <Logo />
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default AppNav;

