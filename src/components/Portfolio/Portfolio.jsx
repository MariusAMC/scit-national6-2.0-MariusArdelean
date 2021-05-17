import { useEffect, useState } from "react";
import "./Portfolio.scss";
import PortfolioList from "./PortfolioList/PortfolioList";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web app",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://lh3.googleusercontent.com/proxy/PjFZN83ILpqbMrxpHtT8h2T70POlcIBRmViwPng2J8msZIyww6Jc2XmFMXxeYFAn73ARp557g_MGXv78cPIiYTrzQkdxmUC2paD8ik04wzgdMopOE6365064haAv"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://lh3.googleusercontent.com/proxy/PjFZN83ILpqbMrxpHtT8h2T70POlcIBRmViwPng2J8msZIyww6Jc2XmFMXxeYFAn73ARp557g_MGXv78cPIiYTrzQkdxmUC2paD8ik04wzgdMopOE6365064haAv"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://lh3.googleusercontent.com/proxy/PjFZN83ILpqbMrxpHtT8h2T70POlcIBRmViwPng2J8msZIyww6Jc2XmFMXxeYFAn73ARp557g_MGXv78cPIiYTrzQkdxmUC2paD8ik04wzgdMopOE6365064haAv"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://lh3.googleusercontent.com/proxy/PjFZN83ILpqbMrxpHtT8h2T70POlcIBRmViwPng2J8msZIyww6Jc2XmFMXxeYFAn73ARp557g_MGXv78cPIiYTrzQkdxmUC2paD8ik04wzgdMopOE6365064haAv"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://lh3.googleusercontent.com/proxy/PjFZN83ILpqbMrxpHtT8h2T70POlcIBRmViwPng2J8msZIyww6Jc2XmFMXxeYFAn73ARp557g_MGXv78cPIiYTrzQkdxmUC2paD8ik04wzgdMopOE6365064haAv"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
