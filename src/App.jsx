import Skills from "./components/Skills/Skills";
import TopBar from "./components/TopBar/TopBar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Hobby from "./components/Hobby/Hobby";
import Contact from "./components/Contact/Contact";
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import About from "./components/About/About";
import "./App.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Skills />
        <Portfolio />
        <Hobby />
        <Contact />
      </div>
    </div>
  );
}

export default App;
