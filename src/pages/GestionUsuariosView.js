import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { GestionUsuarios } from "../components/GestionUsuarios/GestionUsuarios";
import List from "../data/data.json";

function GestionUsuariosView(props) {
  const [user, setUser] = useState(List.user);
  return (
    <div className="App">
      <Navbar user={user} />
      <GestionUsuarios />
    </div>
  );
}

export default GestionUsuariosView;
