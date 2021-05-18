import "./About.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about-text">
        <h1>
          About <span className="me">Me</span>
          <span className="underline"></span>
        </h1>
      </div>
      <div className="img-and-text">
        <div className="img">
          <img src="/assets/me.jpg" alt="" />
        </div>
        <div className="text"></div>
      </div>
    </div>
  );
}
