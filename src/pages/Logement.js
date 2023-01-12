import React from "react";
import NavBar from "../components/NavBar";
import Slideshow from "../components/Slideshow"
import { useParams } from "react-router-dom";

export default function Logement() {
    let selectedId = useParams();
    let logementTitle;
    let logementPictures;
    let logementDesc;
    let logementHost;
    let logementRating;
    let logementLocation;
    let logementEquipments;
    let logementTags;

    Logements.forEach((logement) => {
        if (logement.id === selectedId.id) {
            logementTitle = logement.title;
            logementPictures = logement.pictures;
            logementDesc = logement.description;
            logementHost = logement.host;
            logementRating = logement.rating;
            logementLocation = logement.location;
            logementEquipments = logement.equipments;
            logementTags = logement.tags;
        }
    })
    
  return (
    <div className="logement">
      <NavBar />
      <Slideshow />
    </div>
  );
}
