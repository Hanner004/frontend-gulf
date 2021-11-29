import React, { Component } from "react";
import "../styles.css";

export default class Form extends Component {
  render() {
    return (
      <div className="container-flex form-background">
        <form action="">
          <div className="form-group pb-2 mb-4">
            <h1 className="text-light">
              <b>Iniciar sesión</b>
            </h1>
            <p className="text-light">Lorem ipsum dolor sit amet adipiscing</p>
          </div>
          <div className="form-group px-2 mb-2">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Correo electrónico"
              required
            />
          </div>
          <div className="form-group p-2 mb-2">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Contraseña"
              required
            />
          </div>
          <div className="form-group p-2">
            <a type="submit" className="btn btn-light btnSubmit" href="#">
              Iniciar sesión
            </a>
          </div>
          <div className="forgotPwd text-center pt-2">
            <a href="#">¿Has olvidado tu contraseña?</a>
            <br />
            <a href="#">
              ¿No tienes una cuenta? <b>Registrate</b>
            </a>
          </div>
        </form>
      </div>
    );
  }
}
