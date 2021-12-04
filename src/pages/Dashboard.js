import React, { useState } from "react";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";

//data
const data = {
  name: "Hanner",
  role: "admin",
};

function Dashboard() {
  const [user, setUser] = useState(data);
  return (
    <div className="App">
      <Navbar />
      <Main user={user} />
    </div>
  );
}

export default Dashboard;
