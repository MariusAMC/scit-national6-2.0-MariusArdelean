import TopBar from "./components/TopBar/TopBar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <div className="app">
      <TopBar />
      <div className="sections">
        <Intro />
        <Portfolio/>
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
