import "./Intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hey there! I'm</h2>
          <h1>Marius Ardelean</h1>
          <h3>
            Web developer <span></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
