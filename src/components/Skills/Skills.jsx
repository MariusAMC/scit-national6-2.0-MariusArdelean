import "./Skills.scss";
import Fade from "react-reveal/Fade";

export default function Skills() {
  return (
    <div className="skills" id="Skills">
      <div className="container">
        <Fade down>
          <h1>
            Base <span className="me">Skills</span>
            <span className="underline"></span>
          </h1>
        </Fade>
        <ul>
          <Fade left>
            <li className="html">html</li>
          </Fade>
          <Fade right>
            <li className="css">css</li>
          </Fade>
          <Fade left>
            <li className="js">js</li>
          </Fade>
          <Fade right>
            <li className="react">react</li>
          </Fade>
          <Fade left>
            <li className="git">git</li>
          </Fade>
        </ul>
      </div>
    </div>
  );
}
