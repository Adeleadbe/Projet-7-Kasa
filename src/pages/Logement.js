import React from "react";
import Slideshow from "../components/Slideshow";
import { useParams } from "react-router-dom";
import Logements from "../data/logements.json";
import Tag from "../components/Tag";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";
import { Navigate } from "react-router-dom";

export default function Logement() {
  let logementId = useParams();
  let logementTitle;
  let logementPictures;
  let logementDescription;
  let logementHost;
  let logementRating;
  let logementLocation;
  let logementEquipments;
  let logementTags;

  Logements.forEach((logement) => {
    if (logement.id === logementId.id) {
      logementTitle = logement.title;
      logementPictures = logement.pictures;
      logementDescription = logement.description;
      logementHost = logement.host;
      logementRating = logement.rating;
      logementLocation = logement.location;
      logementEquipments = logement.equipments;
      logementTags = logement.tags;
    }
  });

  if (!logementTitle) {
    return <Navigate to="*" />;
  }

  return (
    <div className="logement">
      <Slideshow images={logementPictures} />
      <div className="logement_display">
        <div className="display_presentation">
          <div className="display_info">
            <h2>{logementTitle}</h2>
            <h3>{logementLocation}</h3>
            <div className="display_tags">
              <Tag tags={logementTags} />
            </div>
          </div>
          <div className="display_host">
            <div className="display_host_container">
              <span className="display_host_name">{logementHost.name}</span>
              <img src={logementHost.picture} alt={logementHost.name} />
            </div>
            <div className="display_host_rating">
              <Rating ratings={logementRating} />
            </div>
          </div>
        </div>
        <div className="logement_collapse">
          <div className="logement_description">
            <Collapse title="Description" text={logementDescription} />
          </div>
          <div className="logement_equipements">
            <Collapse title="Équipements" text={logementEquipments} />
          </div>
        </div>
      </div>
    </div>
  );
}
