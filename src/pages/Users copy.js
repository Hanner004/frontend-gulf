import React, { useState } from "react";
import {AddUser, Profile} from "../components/Users/AddUser";
import Navbar from "../components/Navbar/Navbar";
import List from "../data/data.json";

export default function Users() {

  function AgregarUsuario() {
    const [user, setUser] = useState(List.user);
    return (
      <div className="App">
        <Navbar user={user}/>
        <AddUser/>
      </div>
    );
  };

  function Profilel() {
    const [user, setUser] = useState(List.user);
    return (
      <div className="App">
        <Navbar user={user}/>
        <Profile user={user}/>
      </div>
    );
  };

}
