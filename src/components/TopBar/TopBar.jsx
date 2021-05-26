import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import "./TopBar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function TopBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topBar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="item-container">
            <Person className="icon" />
            <span>+40 746 929 362</span>
          </div>
          <div className="item-container">
            <Mail className="icon" />
            <span className="mail-address">marius20amc@gmail.com</span>
          </div>
          <div class="wrapper">
            <div class="button">
              <div class="icon">
                <i class="fab fa-facebook-f">
                  <FaFacebook />
                </i>
              </div>
              <span>Facebook</span>
            </div>
            <div class="button">
              <div class="icon">
                <i class="fab fa-twitter">
                  <FaInstagram />
                </i>
              </div>
              <span>Instagram</span>
            </div>
            <div class="button">
              <div class="icon">
                <i class="fab fa-github">
                  <FaGithub />
                </i>
              </div>
              <span>Github</span>
            </div>
            <div class="button">
              <div class="icon">
                <i class="fab fa-youtube">
                  <FaLinkedinIn />
                </i>
              </div>
              <span>LikedIn</span>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
