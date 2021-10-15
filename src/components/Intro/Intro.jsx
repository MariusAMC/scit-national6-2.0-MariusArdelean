import "./Intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <section className="section">
        <video src="assets/smoke.mp4" autoPlay muted></video>
        <div className="square">
          <h1>
            <span>W</span>
            <span>E</span>
            <span>L</span>
            <span>C</span>
            <span>O</span>
            <span>M</span>
            <span>E</span>
          </h1>
        </div>
        <a href="#about">
          <img src="assets/down.png" alt="" />
        </a>
      </section>
    </div>
  );
}
