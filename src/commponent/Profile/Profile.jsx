import c from "./Profile.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import SendIcon from "@mui/icons-material/Send";

const Profile = () => {
  return (
    <div className={c.profileMain}>
      <div className={c.profileHeader}>
        <div className={c.userDetail}>
          <div className={c.userImage}>
            <img
              alt=""
              src="https://i0.wp.com/i.pinimg.com/474x/60/13/a3/6013a33f806d8d74f43ee2eb565ff4dc.jpg"
            />
          </div>
          <div className={c.userData}>
            <h2>Smith Alexander</h2>
            <p>
              Founder and CEO at
              <br />
              <i></i>Boston, MA, United States
            </p>
          </div>
          <div className={c.socialIcon}>
            <ul className={c.ul}>
              <li className={c.item1}>
                <a href="/#0">
                  <GoogleIcon />
                </a>
              </li>
              <li className={c.item2}>
                <a href="/#0">
                  <FacebookIcon />
                </a>
              </li>
              <li className={c.item3}>
                <a href="/#0">
                  <TwitterIcon />
                </a>
              </li>
              <li className={c.item4}>
                <a href="/#0">
                  <InstagramIcon />
                </a>
              </li>
              <li className={c.item5}>
                <a href="/#0">
                  <LocalPhoneRoundedIcon />
                </a>
              </li>
            </ul>
            <a href="/#" type="button" className={c.msgBtn}>
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
