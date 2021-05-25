import "./Skills.scss";
import Fade from "react-reveal/Fade";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="container">
        <Fade down>
          <h1>
            Base <span className="me">Skills</span>
            <span className="underline"></span>
          </h1>
        </Fade>
        <ul>
          <Fade left>
            <li className="html">
              <img src="assets/html.png" alt="" />
            </li>
          </Fade>
          <Fade right>
            <li className="css">
              <img src="assets/css.png" alt="" />
            </li>
          </Fade>
          <Fade left>
            <li className="js">
              <img src="assets/js.png" alt="" />
            </li>
          </Fade>
          <Fade right>
            <li className="react">
              <img src="assets/react.png" alt="" />
            </li>
          </Fade>
          <Fade left>
            <li className="git">
              <img src="assets/git.png" alt="" />
            </li>
          </Fade>
        </ul>
      </div>
    </div>
  );
}
