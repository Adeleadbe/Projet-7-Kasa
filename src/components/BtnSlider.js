import React from "react";
import "./Slideshow";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";

export default function BtnSlider({ moveSlide, direction }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn next" : "btn prev"}
    >
      <img
        src={direction === "next" ? rightArrow : leftArrow}
        alt="icone de flèche"
      />
    </button>
  );
}
