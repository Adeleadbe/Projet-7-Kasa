import React from "react";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import imageBg from "../assets/imageBg.png";

export default function Home() {
  return (
    <div className="body">
      <div className="home">
        <NavBar />
        <Banner image= {imageBg} title={"Chez vous, partout et ailleurs"} />
        <Cards />
      </div>
    </div>
  );
}
