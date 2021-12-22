import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Profile from "../components/Users/Profile";
import List from "../data/data.json";

function ProfileView() {
  useEffect(()=>document.title="Perfil");
  const [user, setUser] = useState(List.user);
  const [session] = useState(JSON.parse(localStorage.getItem("session")));
  return (
    <div className="App">
      <Navbar user={user} session={session}/>
      <Profile user={user} session={session}/>
    </div>
  );
}

export default ProfileView;
