import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import imageBg from "../assets/imageBg.png";
import bgFilter from "../assets/bgFilter.png"

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner__header">
        <img src={logo} alt="Kasa" className="banner__logo" />
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/About">À propos</Link>
        </nav>
      </div>
      <div className="banner__slogan">
        <img src={imageBg} alt="Paysage" className="banner__image" />
        <img src={bgFilter} alt="Paysage" className="banner__filter" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}
