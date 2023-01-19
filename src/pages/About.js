import React from "react";
import Collapse from "../components/Collapse";
import Banner from "../components/Banner";
import imageAbout from "../assets/imageAbout.jpg";
import about from "../data/about";

export default function About() {
  return (
    <main className="about">
      <Banner image={imageAbout} />
      <div className="about">
        {about.map((data, index) => {
          return (
            <Collapse title={data.title} text={data.text} myKey={index}/>
          );
        })}
      </div>
    </main>
  );
}
