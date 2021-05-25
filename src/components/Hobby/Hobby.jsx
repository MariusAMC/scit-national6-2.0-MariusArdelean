import "./Hobby.scss";

import { useState } from "react";

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
      title: "Desert from Brazil",
      desc: "In September 2019, I had the journey of my life, visiting this amazing places in Brazil. #onTopOfTheWorld ",
      img: "./assets/Hobby/travel1.jpg",
    },
    {
      id: "3",
      title: "Desert from Brazil",
      desc: "In September 2019, I had the journey of my life, visiting this amazing places in Brazil. #onTopOfTheWorld ",
      img: "./assets/Hobby/travel1.jpg",
    },
    {
      id: "4",
      title: "Desert from Brazil",
      desc: "In September 2019, I had the journey of my life, visiting this amazing places in Brazil. #onTopOfTheWorld ",
      img: "./assets/Hobby/travel1.jpg",
    },
    {
      id: "5",
      title: "Desert from Brazil",
      desc: "In September 2019, I had the journey of my life, visiting this amazing places in Brazil. #onTopOfTheWorld ",
      img: "./assets/Hobby/travel1.jpg",
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
              <div className="right">
                <img src={d.img} alt="" />
              </div>
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
