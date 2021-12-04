import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Auth.css";

export default class Form extends Component {
  render() {
    return (
      <div className="container-flex form-background form-register">
        <form action="/register" method="POST">
          <div className="form-group pb-2 mb-4">
            <h1 className="text-white">
              <p>Registro</p>
            </h1>
            <p className="text-light">Lorem ipsum dolor sit amet adipiscing</p>
          </div>
          <div className="form-group row p-2 mb-2">
            <div className="col">
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Nombre"
                required
              />
            </div>
            <div className="col">
              <input
                className="form-control"
                type="text"
                name="lastname"
                placeholder="Apellido"
                required
              />
            </div>
          </div>
          <div className="form-group row p-2 mb-2">
            <div className="col">
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Correo electrónico"
                required
              />
            </div>
            <div className="col">
              <input
                className="form-control"
                type="number"
                name="id"
                placeholder="Identificación"
                required
              />
            </div>
          </div>
          <div className="form-group row p-2 mb-2">
            <div className="col">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Contraseña"
                required
              />
            </div>
            <div className="col">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Confirmación"
                required
              />
            </div>
          </div>
          <div className="form-group p-2">
            <Link
              type="submit"
              className="btn btn-light btnSubmit"
              to="/register"
            >
              <span className="bold">Registrarse</span>
            </Link>
          </div>
          <div className="forgotPwd text-center pt-2">
            <Link to="/login">
              ¿Tienes una cuenta? <span className="bold">Ingresa</span>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
