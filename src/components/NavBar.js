import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


export default function NavBar() {
  return (
    <header>
      <img src={logo} alt="Kasa" className="logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/About">À propos</Link>
      </nav>
    </header>
  );
}
