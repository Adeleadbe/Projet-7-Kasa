import React from "react";
import bgFilter from "../assets/bgFilter.png";

export default function Banner({ image, title }) {
  return (
    <div className="banner">
      <img className="banner_image" src={image} alt="Paysage" />
      <img className="banner_filter" src={bgFilter} alt="Filtre" />
      <h1>{title}</h1>
    </div>
  );
}
