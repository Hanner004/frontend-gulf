import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import GestionUsuariosView from "../pages/GestionUsuariosView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/gestion-usuarios" element={<GestionUsuariosView />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
