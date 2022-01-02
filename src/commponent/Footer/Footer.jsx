import c from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <div className={c.mainFooter}>
      <div className={c.container}>
        <div className={c.footerDiv}>
          <div className={c.footerCopyright}>
            "Made by"
            <a href="/#0">Cruip</a>
            ". All right reserved"
          </div>
          <nav className={c.footerNav}>
            <ul className={c.list}>
              <li>
                <a href="/#0">Contact</a>
              </li>
              <li>
                <a href="/#0">About us</a>
              </li>
              <li>
                <a href="/#0">FAQ's</a>
              </li>
              <li>
                <a href="/#0">Support</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
