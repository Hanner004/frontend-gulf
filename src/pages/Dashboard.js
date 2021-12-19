import React, { useEffect, useState } from "react";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import List from "../data/data.json";

function Dashboard() {
  useEffect(() => (document.title = "Inicio"));

  const [session] = useState(JSON.parse(localStorage.getItem("session")));
  const [user, setUser] = useState(List.user);
  console.log(session)
  return (
    <div className="App">
      <Navbar user={user} />
      <Main user={user} session={session} />
    </div>
  );
}

export default Dashboard;
