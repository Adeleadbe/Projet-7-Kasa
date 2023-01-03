import React from "react";
import logements from "../data/logements.json";
import { Link } from "react-router-dom";

export default function Cards() {
  const data = JSON.stringify(logements);
  const parseData = JSON.parse(data);
  return (
    <div className="card_container">
      {parseData.map((logement) => {
        return (
          <Link to="/jesaispas" className="card" key={logement.id}>
            <img className="card_image" src={logement.cover} alt="Logement" />
            <div className="card_mask"></div>
            <h2> {logement.title} </h2>
          </Link>
        );
      })}
    </div>
  );
}
