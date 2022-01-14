import { Link } from "react-router-dom";
import s from "./GetStarted.module.css";

const GetStarted = () => {
  return (
    <div className={s.heroSection}>
      <div className={s.heroContainer}>
        <div className={s.heroContent}>
          <h1>
            Landing template for <span>startups</span>
          </h1>
          <div className={s.containerXs}>
            <p>
              Our landing page template works on all devices, so you only have
              to set it up once, and get beautiful results forever.
            </p>
            <div className={s.buttonGroup}>
              <Link to="/Todolist">Get started</Link>
              <a href="https://github.com/HubZori/ToDoList">View on Github</a>
            </div>
          </div>
        </div>

        <div className={s.heroFigure}>
          <a href="/#0"> </a>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
