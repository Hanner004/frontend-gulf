import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import EditProfile from "../components/Users/EditProfile";
import List from "../data/data.json";

function EditProfileView() {
  useEffect(()=>document.title="Editar perfil");
  const [user, setUser] = useState(List.user);
  const [session] = useState(JSON.parse(localStorage.getItem("session")));
  return (
    <div className="App">
      <Navbar user={user} session={session}/>
      <EditProfile user={user} session={session}/>
    </div>
  );
}

export default EditProfileView;
