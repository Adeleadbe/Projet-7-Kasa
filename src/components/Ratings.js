import React from "react";
import starWithColor from "../assets/starWithColor.png";
import starWithoutColor from "../assets/starWithoutColor.png";

export default function Ratings({ rating }) {
  let stars = [];
  const star = (starWithColor);
  const emptyStar = (starWithoutColor);
  
  const parseRating = parseInt(rating);
  const emptyStarNumber = 5 - parseRating;

  for (let i = 0; i < parseRating; i++) {
    stars.push(star);
  }

  for (let i = 0; i < emptyStarNumber; i++) {
    stars.push(emptyStar)
  }

  return (
    <>
      {stars.map((image, index) => {
        return <img src={image} alt="nombre d'étoile de l'hôte" key={index}/>;
      })}
    </>
  );
}
