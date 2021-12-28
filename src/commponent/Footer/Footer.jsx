import c from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <div className={c.mainFooter}>
      <div className={c.container}>
        <hr />
        <div className={c.row}>
          <div className={c.col}>
            <h5>THICC MEMES INC</h5>
            <ul className={c.listStyled}>
              <li>342-420-6969</li>
              <li>Moscow, Russia</li>
              <li>123 Streeet South North</li>
            </ul>
          </div>
          <div className={c.col}>
            <h5>Stuff</h5>
            <ul className={c.listStyled}>
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ul>
          </div>
          <div className={c.col}>
            <h5>WELL ANOTHER COLUMN</h5>
            <ul className={c.listStyled}>
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ul>
          </div>
        </div>
        <div className={c.row}>
          <p className={c.sm}>
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
