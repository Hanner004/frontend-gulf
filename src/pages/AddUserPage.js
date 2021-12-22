import React, { useEffect, useState } from "react";
import AddUser from "../components/Users/AddUser";
import Navbar from "../components/Navbar/Navbar";
import List from "../data/data.json";

export default function AgregarUsuario() {
  useEffect(()=>document.title="Agregar usuario");
  const [user, setUser] = useState(List.user);
  const [session] = useState(JSON.parse(localStorage.getItem("session")));
  return (
    <div className="App">
      <Navbar user={user} session={session}/>
      <AddUser/>
    </div>
  );
};
