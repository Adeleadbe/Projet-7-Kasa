import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Layout() {
  return (
    <div className="body">
      <div className="layout">
        <NavBar />
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
