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
              <img className="html1" src="assets/html.svg" alt="" />
            </li>
          </Fade>
          <Fade right>
            <li className="css">
              <img className="css1" src="assets/css-3.svg" alt="" />
            </li>
          </Fade>
          <Fade left>
            <li className="js">
              <img className="js1" src="assets/js.svg" alt="" />
            </li>
          </Fade>
          <Fade right>
            <li className="react">
              <img className="react1" src="assets/atom.svg" alt="" />
            </li>
          </Fade>
          <Fade left>
            <li className="git">
              <img className="git1" src="assets/github.svg" alt="" />
            </li>
          </Fade>
        </ul>
      </div>
    </div>
  );
}
