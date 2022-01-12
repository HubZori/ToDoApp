import c from './AppNav.module.css';
import NavLinks from "./NavLinks";


const Navigation = () => {
    return (
        <nav className={c.navigation}>
            <NavLinks />
        </nav>
    );
}

export default Navigation;