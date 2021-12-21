import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { GestionUsuarios } from "../components/GestionUsuarios/GestionUsuarios";
import List from "../data/data.json";

function GestionUsuariosView(props) {
  useEffect(()=>document.title="Gestión de usuarios");
  const [user, setUser] = useState(List.user);
  const [session] = useState(JSON.parse(localStorage.getItem("session")));
  return (
    <div className="App">
      <Navbar user={user} session={session}/>
      <GestionUsuarios role={user.role}/>
    </div>
  );
}

export default GestionUsuariosView;
