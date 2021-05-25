import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer-container" id="footer">
      <div className="footer-logo-text-container">
        <div className="footer-logo">
          <img
            className="footer-img"
            src="assets/mobile.png"
            alt="footer-logo"
          ></img>
        </div>
        <p className="footer-para">&copy; Copyright 2020 Epuran Alexandru</p>
      </div>
    </div>
  );
}
