import React, { useState } from "react";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import List from "../data/data.json";

function Dashboard() {
  const [user, setUser] = useState(List.user);
  return (
    <div className="App">
      <Navbar user={user} />
      <Main user={user} />
    </div>
  );
}

export default Dashboard;
