import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";


export default function NavBar() {
  return (
    <header>
      <img src={logo} alt="Kasa" className="logo" />
      <nav>
        <NavLink to="/" className={({isActive}) => isActive ? "accueil_navbar active" : "navbar_link"} >Accueil</NavLink>
        <NavLink to="/About" className={({isActive}) => isActive ? "about_navbar active" : "navbar_link"} >À propos</NavLink>
      </nav>
    </header>
  );
}
