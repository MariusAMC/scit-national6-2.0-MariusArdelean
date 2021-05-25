import "./Hobby.scss";
import { useState } from "react";
import Fade from "react-reveal/Fade";

export default function Hobby() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      title: "Desert from Brazil",
      desc: "In September 2019, I had the journey of my life, visiting this amazing places in Brazil. #onTopOfTheWorld ",
      img: "./assets/Hobby/travel1.jpg",
    },
    {
      id: "2",
      title: "Paris - the city of Love",
      desc: "When you love, the most gorgeous city to visit is Paris. It's like everyone around spreads love",
      img: "./assets/Hobby/travel2.jpg",
    },
    {
      id: "3",
      title: "My passion as a teen",
      desc: "From 2009 till present I have been dancing at this National Folk Ensemble Transilvania, this is my job now, but not for long ",
      img: "./assets/Hobby/dance.jpg",
    },
    {
      id: "4",
      title: "My other passion, recently discovered",
      desc: "A few years back, my laptop had a hard time working, decided to look inside and guess what? I fix laptops every now and then.",
      img: "./assets/Hobby/laptop.jpg",
    },
    {
      id: "5",
      title: "Let's be honest: We love gaming",
      desc: "Words about this? only two: TIME KILLER",
      img: "./assets/Hobby/ps5.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="hobby" id="hobby">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <Fade down>
                <div className="left">
                  <div className="leftContainer">
                    {/* <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div> */}
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <span>Hobby</span>
                  </div>
                </div>
              </Fade>
              <Fade up>
                <div className="right">
                  <img src={d.img} alt="" />
                </div>
              </Fade>
            </div>
          </div>
        ))}
      </div>

      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
