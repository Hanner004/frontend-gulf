import React, { Component } from "react";
import Admin from "./Admin";
import Ext from "./Ext";
import Int from "./Int";

export default function Main(props) {
  const { user, session } = props;
  console.log('Este es: ' + user.role)
  switch (user.role) {
    case "admin":
      return <Admin user={user} session={session} />;
    case "ext":
      return <Ext user={user} session={session} />;
    case "int":
      return <Int user={user} session={session} />;
    default:
      return (
        <div className="main">
          <div className="not-found">
            <h1>404</h1>
            <p>role not found</p>
          </div>
        </div>
      );
  }
}
