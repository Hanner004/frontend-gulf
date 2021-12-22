import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Profile from "../components/Users/Profile";
import List from "../data/data.json";

function ProfileView() {
  useEffect(()=>document.title="Perfil");
  const [user, setUser] = useState(List.user);
  return (
    <div className="App">
      <Navbar user={user} />
      <Profile user={user} />
    </div>
  );
}

export default ProfileView;
