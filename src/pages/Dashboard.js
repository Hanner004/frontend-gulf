import React, { useEffect, useState } from "react";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import List from "../data/data.json";

function Dashboard() {
  useEffect(() => (document.title = "Inicio"));

  var data = JSON.parse(localStorage.getItem("data"));
  console.log(data);

  const [user, setUser] = useState(List.user);
  const [token, setToken] = useState(data.token);
  return (
    <div className="App">
      <Navbar user={user} />
      <Main user={user} token={token}/>
    </div>
  );
}

export default Dashboard;
