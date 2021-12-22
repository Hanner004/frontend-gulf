import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import EditUser from "../components/Users/EditUser";
import List from "../data/data.json";

function EditUserView() {
  useEffect(()=>document.title="Editar usuario");
  const [user, setUser] = useState(List.user);
  const [session] = useState(JSON.parse(localStorage.getItem("session")));
  return (
    <div className="App">
      <Navbar user={user} session={session}/>
      <EditUser user={user} session={session}/>
    </div>
  );
}

export default EditUserView;
