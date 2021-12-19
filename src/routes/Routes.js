import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthLogin, AuthRegister } from "../pages/Auth";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/ProfileView";
import GestionUsuariosView from "../pages/GestionUsuariosView";
import { TanquearVehiculo } from "../pages/TanquearVehiculo";
import AddUser from "../pages/AddUserPage";
import EditUser from "../pages/EditUserView";
import EditProfile from "../pages/EditProfileView";

function App() {
  var session = JSON.parse(localStorage.getItem("session"));
  if (session) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<AuthLogin />}></Route>
          <Route path="/register" element={<AuthRegister />}></Route>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/adduser" element={<AddUser />}></Route>
          <Route path="/editUser/:id" element={<EditUser />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/editProfile" element={<EditProfile />}></Route>
          <Route path="/gestion-usuarios" element={<GestionUsuariosView />}></Route>
          <Route path="/tanquear" element={<TanquearVehiculo />}></Route>
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<AuthLogin />}></Route>
          <Route path="/register" element={<AuthRegister />}></Route>
          <Route path="/" element={<AuthLogin />}></Route>
          <Route path="/adduser" element={<AuthLogin />}></Route>
          <Route path="/editUser/:id" element={<AuthLogin />}></Route>
          <Route path="/Profile" element={<AuthLogin />}></Route>
          <Route path="/editProfile" element={<AuthLogin />}></Route>
          <Route path="/gestion-usuarios" element={<AuthLogin />}></Route>
          <Route path="/tanquear" element={<AuthLogin />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;
