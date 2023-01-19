import React from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import imageBg from "../assets/imageBg.png";

export default function Home() {
  return (
    <div className="home">
      <Banner image={imageBg} title={"Chez vous, partout et ailleurs"} />
      <Cards />
    </div>
  );
}
