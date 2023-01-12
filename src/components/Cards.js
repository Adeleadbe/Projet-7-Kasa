import React from "react";
import logements from "../data/logements.json";
import { Link } from "react-router-dom";

export default function Cards() {
  return (
    <div className="card_container">
      {logements.map((logement) => {
        return (
          <Link to={`/Logement/${logement.id}`} className="card" key={logement.id}>
            <img className="card_image" src={logement.cover} alt="Logement" />
            <div className="card_mask"></div>
            <h2> {logement.title} </h2>
          </Link>
        );
      })}
    </div>
  );
}
