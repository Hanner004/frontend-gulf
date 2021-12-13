import React, { useEffect, useState } from "react";
import AddUser from "../components/Users/AddUser";
import Navbar from "../components/Navbar/Navbar";
import List from "../data/data.json";

export default function AgregarUsuario() {
  useEffect(()=>document.title="Agregar usuario");
  const [user, setUser] = useState(List.user);
  return (
    <div className="App">
      <Navbar user={user}/>
      <AddUser/>
    </div>
  );
};
