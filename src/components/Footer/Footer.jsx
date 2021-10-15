import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer-container" id="footer">
      <div className="footer-logo-text-container">
        <div className="footer-logo">
          <img
            className="footer-img"
            src="assets/atom.svg"
            alt="footer-logo"
          ></img>
        </div>
        <p className="footer-para">
          &copy; {new Date().getFullYear()} 2020 A.M.C Genius Inc | All rights
          reserved
        </p>
      </div>
    </div>
  );
}
