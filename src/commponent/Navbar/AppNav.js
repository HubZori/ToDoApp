import c from "./AppNav.module.css"
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

const AppNav = () => {
  return (
    <div className={c.NavBar}>
      <MobileNavigation />
      <Navigation />
    </div>
  );
};

export default AppNav;

