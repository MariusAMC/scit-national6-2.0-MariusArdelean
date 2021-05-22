import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Skills.scss";

export default function Skills() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="skills" id="Skills">
      <div className="container">
        <ul>
          <li data-aos="fade-up" className="html">
            html
            {/* <img src="assets/mobile.png" alt="" /> */}
          </li>
          <li data-aos="fade-up" className="css">
            CSS img
          </li>
          <li data-aos="fade-up" className="js">
            javaScript
          </li>
          <li data-aos="fade-up" className="react">
            React
          </li>
          <li data-aos="fade-up" className="git">
            GitHub
          </li>
        </ul>
      </div>
    </div>
  );
}
