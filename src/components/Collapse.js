import React from "react";
import { useState } from "react";

export default function Collapse({ title, text }) {
  const chevronUp = <i className="fa-solid fa-chevron-up"></i>;
  const chevronDown = <i className="fa-solid fa-chevron-down"></i>;
  //Defini le active state
  const [active, setActive] = useState(false);

  const displayText = () => {
    if (typeof text === "object") {
      return (
        //Creation d'une liste pour afficher les elements dans equipement
        <ul>
          {text.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    } else {
      return <p>{text}</p>;
    }
  };

  return (
    // Inverse la valeur de active state quand click sur le titre.
    <div className="collapse">
      <h3 onClick={() => setActive(!active)}>{title}</h3>
      <div className="collapse_icon">{active ? chevronUp : chevronDown}</div>
      {active && <div className="collapse_text">{displayText()}</div>}
    </div>
  );
}
