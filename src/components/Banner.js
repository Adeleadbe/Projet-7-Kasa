import React from "react";
import imageBg from "../assets/imageBg.png";
import bgFilter from "../assets/bgFilter.png"

export default function Banner() {
  return (
    <div className="banner">
        <img className="banner_image" src={imageBg} alt="Paysage" />
        <img className="banner_filter" src={bgFilter} alt="Filtre"  />
        <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}
