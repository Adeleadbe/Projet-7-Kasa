import "./styles/index.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logement from "./pages/Logement";
import PageError from "./pages/PageError";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Logement/:id" element={<Logement />} />
          <Route path="*" element={<PageError />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
