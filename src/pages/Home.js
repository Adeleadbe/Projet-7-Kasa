import React from "react";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Cards from "../components/Cards";

export default function Home() {
  return (
    <div className="body">
      <div className="home">
        <NavBar />
        <Banner />
        <Cards />
      </div>
    </div>
  );
}
