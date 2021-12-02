import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "../pages/AddUser";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/adduser" element={<AddUser />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
