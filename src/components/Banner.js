import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <nav>
      <div>
        <p>testttttt</p>
      </div>
      <Link to="/">Accueil</Link>
      <Link to="/About">A propos</Link>
      <p>test</p>
    </nav>
  );
}
