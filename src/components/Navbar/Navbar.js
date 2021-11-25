import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-light bg-white justify-content-between">
          <Link className="navbar-brand m-2" to="/">
            <h1>
              <b>Gulf </b>
              <img className="mb-2 mx-2" src="./logo.svg" alt="logo" />
            </h1>
          </Link>

          <Dropdown>
            <img
              className="mx-2"
              src="./foto.svg"
              alt="foto"
              width="49"
              height="49"
            />
            <Dropdown.Toggle variant="ligth" id="dropdown-basic">
              Administrador
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/profile">Perfil</Dropdown.Item>
              <Dropdown.Item href="#/logout">Cerrar sesión</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </nav>
      </div>
    );
  }
}
