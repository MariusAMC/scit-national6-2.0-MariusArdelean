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
            <span>+40-746-929-362</span>
          </div>
          <div className="item-container">
            <Mail className="icon" />
            <span className="mail-address">marius20amc@gmail.com</span>
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
