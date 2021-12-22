import React from "react";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

function AuthLogin(props) {
  return (
    <div className="auth-background">
      <Login />
    </div>
  );
}

function AuthRegister(props) {
  return (
    <div className="auth-background">
      <Register />
    </div>
  );
}

export { AuthLogin, AuthRegister };
