import React from "react";
import { useState } from "react";
import BtnSlider from "./BtnSlider";

export default function Slideshow({ images }) {
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if(slideIndex !== images.length) {
      setSlideIndex(slideIndex + 1)
    } else if(slideIndex === images.length) {
      setSlideIndex(1)
    }
  }
  
  const previousSlide = () => {
    if(slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if(slideIndex === 1) {
      setSlideIndex(images.length)
    }
  }

  return (
    <div className="container_slider">
      {images.map((image, index) => {
        return (
          <div className={slideIndex === index + 1 ? "slide active_anim" : "slide"} key={index}>
            <img src={image} alt="logement" />
          </div>
        );
      })}
      {/*Ajoute les fleches si il y a plus d'une image*/}
      {images.length > 1 ? (
        <>
        <div className="slide_counter">{slideIndex}/{images.length}</div>
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={previousSlide} direction={"prev"} />
        </> 
      ) : null }
    </div>
  );
}
