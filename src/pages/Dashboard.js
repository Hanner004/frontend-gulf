import React, { useState } from "react";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import list from "../../src/data/data.json"

function Dashboard() {
  const [user, setUser] = useState(list.user);
  return (
    <div className="App">
      <Navbar user={user} />
      <Main user={user} />
    </div>
  );
}

export default Dashboard;
