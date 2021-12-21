import React, { Component, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({session}) {

  const idUser = session.data._id;
  const [user, setUser] = useState([])

  function getUser() {
    fetch("http://localhost:4000/api/users/"+idUser,{
      method: 'GET',
      headers: {'Authorization': 'Bearer '+session.token},
      })
      .then((response) => response.json())
      .then((data) => {
        setUser(data.data)
      })
      .catch((err)=>{console.log(err)});
  }
  
  useEffect(()=>{
    getUser();
  },[]);

  function role(props) {
    switch (props) {
      case "admin":
        return "Administrador";
      case "ext":
        return "Usuario";
      case "int":
        return "Empleado";
      default:
        return "Error";
    }
  }

  const closeSession = () => {
    localStorage.clear();
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-light bg-white justify-content-between px-5">
        <Link className="navbar-brand m-2 mb-1" to="/">
          <h1>
            <b style={{ color: "#003845" }}>Gulf </b>
            <img className="mb-2 mx-2" src="../logo.svg" alt="logo" />
          </h1>
        </Link>

        <Dropdown>
          <img
            className="mx-2"
            src="/img/foto.svg"
            alt="foto"
            width="49"
            height="49"
          />
          <Dropdown.Toggle variant="ligth" id="dropdown-basic">
          {user.name} - {role(user.role)}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/profile">Perfil</Dropdown.Item>
            <Dropdown.Item href="/login" onClick={closeSession}>
              Cerrar sesión
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </div>
  );
}
