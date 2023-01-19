import React from "react";
import { useState } from "react";

export default function Collapse({ title, text, myKey }) {
  const chevronUp = <i className="fa-solid fa-chevron-up"></i>;
  const chevronDown = <i className="fa-solid fa-chevron-down"></i>;
  //Here, we've defined the isActive state. Based on that, we'll hide or show the accordion content.
  const [active, setActive] = useState(false);

  // Creation d'une liste pour afficher les elements dans equipement
  const displayText = () => {
    if (typeof text === "object") {
      return (
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
    //Here, we're inverting the isActive state value when we click on the accordion-title div. If the value of isActive is false, we're setting it to true and vice-versa.
    <div className="collapse">
      <h3 onClick={() => setActive(!active)}>{title}</h3>
      <div className="collapse_icon">{active ? chevronUp : chevronDown}</div>
      {active && <div className="collapse_text">{displayText()}</div>}
    </div>
    //And if the isActive state value is true then we're only showing the accordion content as shown au dessus
  );
}
