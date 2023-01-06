import React from "react";
import Collapse from "../components/Collapse";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import imageAbout from "../assets/imageAbout.png";

export default function About() {
  return (
    <main className="about_navbar">
      <NavBar />
      <Banner image={imageAbout} />
      <div className="collapse"></div>
    </main>
  );
}
