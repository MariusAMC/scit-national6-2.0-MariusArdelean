import "./About.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Flash from "react-reveal/Flash";
import Fade from "react-reveal/Fade";

export default function About() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Web Developer",
        "Dancer",
        "Traveler",
        "Gamer",
        "Sci-Fi Fan",
        "Laptops repair-man",
      ],
    });
  }, []);

  return (
    <div className="about" id="about">
      <div className="left">
        <Fade left>
          <div className="img">
            <img src="/assets/me.jpg" alt="" />
          </div>
        </Fade>
      </div>
      <div className="right">
        <h1>
          About <span className="me">Me</span>
          <span className="underline"></span>
        </h1>
        <Fade right>
          <div className="text">
            <h3 className="hi">Hi! I'm Marius and I am a</h3>
            <span ref={textRef}></span>
            <p>
              Ambitious, hardworking and especially very curious. I started
              learning about Web development 4 months ago, and now here I am
              making the best I can do. I can't wait to discover more and more
              about this "TECH" world that I stepped in to. Working on this
              project made me learn lots of things every day and every hour of
              the day. My goal is to become a full-time Web Developer, gather a
              lot of experience and then climb the latter of SUCCESS
            </p>
          </div>
        </Fade>
        <Flash>
          <button className="dld-button">Download CV</button>
        </Flash>
      </div>
    </div>
  );
}
