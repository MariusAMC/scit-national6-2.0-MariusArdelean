import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#hobby">Hobby</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div class="wrapper1">
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
  );
}
