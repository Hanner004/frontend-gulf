import React, { Component } from "react";
import "../styles.css";

export default class Form extends Component {
  render() {
    let url = {
      dashboard: "/",
      register: "/register",
      login: "/login",
      forgotPwd: "/forgotPwd",
    };
    return (
      <div className="container-flex form-background form-register">
        <form action="">
          <div className="form-group pb-2 mb-4">
            <h1 className="text-light">
              <b>Registro</b>
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
            <a
              type="submit"
              className="btn btn-light btnSubmit"
              href={url.register}
            >
              <b>Registrarse</b>
            </a>
          </div>
          <div className="forgotPwd text-center pt-2">
            <a href={url.login}>
              ¿Tienes una cuenta? <b>Ingresa</b>
            </a>
          </div>
        </form>
      </div>
    );
  }
}
