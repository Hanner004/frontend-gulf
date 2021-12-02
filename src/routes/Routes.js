import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "../pages/AddUser";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/Adduser" element={<AddUser />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
