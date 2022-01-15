import s from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <div className={s.mainFooter}>
      <div className={s.container}>
        <div className={s.footerDiv}>
          <div className={s.footerCopyright}>
            "Made by"
            <a href="/#0">Cruip</a>
            ". All right reserved"
          </div>
          <nav className={s.footerNav}>
            <ul className={s.list}>
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
