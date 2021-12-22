import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    function role(props) {
      switch (props.user.role) {
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
              {role(this.props)}
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
}
