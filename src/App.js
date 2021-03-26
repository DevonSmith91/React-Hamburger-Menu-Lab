import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home.js";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="content">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/contact" render={() => <Contact />} />
            <Route path="/gallery" render={() => <Gallery />} />
            <Route path="/about" render={() => <About />} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
