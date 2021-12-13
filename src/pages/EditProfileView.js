import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import EditProfile from "../components/Users/EditProfile";
import List from "../data/data.json";

function EditProfileView() {
  useEffect(()=>document.title="Editar perfil");
  const [user, setUser] = useState(List.user);
  return (
    <div className="App">
      <Navbar user={user} />
      <EditProfile user={user} />
    </div>
  );
}

export default EditProfileView;
