import "./styles/App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import PageError from "./pages/PageError";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Logement" element={<Logement />} />
        <Route path="/PageError" element={<PageError />} />
      </Routes>
    </div>
  );
}

export default App;
