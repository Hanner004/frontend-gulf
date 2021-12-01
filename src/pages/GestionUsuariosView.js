import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { GestionUsuarios } from "../components/GestionUsuarios/GestionUsuarios";

function GestionUsuariosView(props) {
  return (
    <div className="App">
      <Navbar />
      <GestionUsuarios />
    </div>
  );
}

export default GestionUsuariosView;
