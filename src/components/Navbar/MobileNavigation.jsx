import s from "./AppNav.module.css";
import NavLinks from "./NavLinks";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const hamburgerIcon = (
    <MenuIcon className={s.hamburger} onClick={() => setOpen(!open)} />
  );
  const closeIcon = (
    <CloseIcon className={s.hamburger} onClick={() => setOpen(!open)} />
  );
  const closeMobileMenu = () => setOpen(false);
  return (
    <nav className={s.mobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
