import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "../pages/AddUser";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import GestionUsuariosView from "../pages/GestionUsuariosView";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { TanquearVehiculo } from "../pages/TanquearVehiculo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/Adduser" element={<AddUser />}></Route>
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/gestion-usuarios" element={<GestionUsuariosView />}></Route>
        <Route path="/AddUser" element={<AddUser />}></Route>
        <Route path="/tanquear" element={<TanquearVehiculo />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
