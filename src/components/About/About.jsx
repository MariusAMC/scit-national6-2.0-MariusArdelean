import "./About.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function About() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["test", "testulet", "mai"],
    });
  }, []);

  return (
    <div className="about" id="about">
      <div className="left">
        <div className="img">
          <img src="/assets/me.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <h1>
          About <span className="me">Me</span>
          <span className="underline"></span>
        </h1>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odit,
            magnam nobis amet quisquam, a voluptates harum porro eligendi aut
            voluptate provident alias quas officia reiciendis! Nostrum maxime
            dolor sequi.
          </p>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <button className="dld-button">Download CV</button>
      </div>
    </div>
  );
}
