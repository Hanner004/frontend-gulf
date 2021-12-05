import React, { Component } from "react";
import Admin from "./Admin";
import Ext from "./Ext";
import Int from "./Int";

export default function Main(props) {
  switch (props.user.role) {
    case "admin":
      return <Admin user={props.user} />;
    case "ext":
      return <Ext user={props.user} />;
    case "int":
      return <Int user={props.user} />;
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
