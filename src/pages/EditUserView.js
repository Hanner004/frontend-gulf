import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import EditUser from "../components/Users/EditUser";
import List from "../data/data.json";

function EditUserView() {
  useEffect(()=>document.title="Editar usuario");
  const [user, setUser] = useState(List.user);
  return (
    <div className="App">
      <Navbar user={user} />
      <EditUser user={user} />
    </div>
  );
}

export default EditUserView;
