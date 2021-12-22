import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { GestionUsuarios } from "../components/GestionUsuarios/GestionUsuarios";
import List from "../data/data.json";

function GestionUsuariosView(props) {
  useEffect(()=>document.title="Gestión de usuarios");
  const [user, setUser] = useState(List.user);
  return (
    <div className="App">
      <Navbar user={user} />
      <GestionUsuarios role={user.role}/>
    </div>
  );
}

export default GestionUsuariosView;
