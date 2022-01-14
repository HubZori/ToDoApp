import s from "./Profile.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className={s.profileMain}>
      <div className={s.profileHeader}>
        <div className={s.userDetail}>
          <div className={s.userImage}>
            <img
              alt=""
              src="https://i0.wp.com/i.pinimg.com/474x/60/13/a3/6013a33f806d8d74f43ee2eb565ff4dc.jpg"
            />
          </div>
          <div className={s.userData}>
            <h2>Smith Alexander</h2>
            <p>
              Founder and CEO at
              <br />
              <i></i>Boston, MA, United States
            </p>
          </div>
          <div className={s.socialIcon}>
            <ul className={s.ul}>
              <li>
                <Link
                  className={s.item1}
                  to="https://www.google.com/intl/ru/gmail/about"
                >
                  <GoogleIcon />
                </Link>
              </li>
              <li className={s.item2}>
                <a href="https://www.facebook.com/">
                  <FacebookIcon />
                </a>
              </li>
              <li className={s.item3}>
                <a href="https://twitter.com/">
                  <TwitterIcon />
                </a>
              </li>
              <li className={s.item4}>
                <a href="https://www.instagram.com/">
                  <InstagramIcon />
                </a>
              </li>
              <li className={s.item5}>
                <a href="/#">
                  <LocalPhoneRoundedIcon />
                </a>
              </li>
            </ul>
            <a href="/#" type="button" className={s.msgBtn}>
              <SendIcon fontSize="small" />
              Send Message
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
