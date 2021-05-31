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
          <a
            href="https://www.facebook.com/ardelean.marius08"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>
        <div class="button">
          <div class="icon">
            <i class="fab fa-twitter">
              <FaInstagram />
            </i>
          </div>
          <a
            href="https://www.instagram.com/marius20amc/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
        <div class="button">
          <div class="icon">
            <i class="fab fa-github">
              <FaGithub />
            </i>
          </div>
          <a
            href="https://github.com/MariusAMC/scit-national6-2.0-MariusArdelean"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <div class="button">
          <div class="icon">
            <i class="fab fa-youtube">
              <FaLinkedinIn />
            </i>
          </div>
          <a
            href="https://www.linkedin.com/in/marius-ardelean-0133621bb/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
