import React from "react";
import Collapse from "../components/Collapse";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import imageAbout from "../assets/imageAbout.jpg";
import about from "../data/about";

export default function About() {
  return (
    <main className="about_navbar">
      <NavBar />
      <Banner image={imageAbout} />
      <div className="about">
        {about.map((data) => {
          return (
            <Collapse myKey={data.id} title={data.title} text={data.text} />
          );
        })}
      </div>
    </main>
  );
}
