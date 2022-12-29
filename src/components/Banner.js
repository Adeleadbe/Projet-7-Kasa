import React from "react";
import imageBg from "../assets/imageBg.png";
import bgFilter from "../assets/bgFilter.png"

export default function Banner() {
  return (
    <div className="banner">
        <img src={imageBg} alt="Paysage" className="banner_image" />
        <img src={bgFilter} alt="Filtre" className="banner_image" />
        <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}
