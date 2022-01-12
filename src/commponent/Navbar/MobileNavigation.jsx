import c from './AppNav.module.css'
import NavLinks from "./NavLinks";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';


const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <MenuIcon className={c.hamburger}
        onClick={() => setOpen(!open)} />



    const closeIcon = <CloseIcon className={c.hamburger}
        onClick={() => setOpen(!open)} />


    const closeMobileMenu = () => setOpen(false);
    return (
        <nav className={c.mobileNavigation}>
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}

        </nav>
    );
}

export default MobileNavigation;