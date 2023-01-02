import React from "react";
import logements from "../data/logements.json";

export default function Cards({}) {
  const data = JSON.stringify(logements);
  const parseData = JSON.parse(data);
  return (
    <div className="card_container">
      {parseData.map((logement) => {
        return (
          <div className="card" key={logement.id}>
            <img className="card_image" src={logement.cover} alt="Logement" />
            <h2> {logement.title} </h2>
          </div>
        );
      })}
    </div>
  );
}
