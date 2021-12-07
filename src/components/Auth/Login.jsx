import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export default class Login extends Component {
  render() {
    return (
      <div className="container-flex form-background form-login">
        <form action="/login" method="POST">
          <div className="form-group pb-2 mb-4">
            <h1 className="text-white">
              <p>Iniciar sesión</p>
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
            <Link type="submit" className="btn btn-light btnSubmit" to="/">
              <span className="bold">Iniciar sesión</span>
            </Link>
          </div>
          <div className="forgotPwd text-center pt-2">
            <Link to="/forgotPwd">¿Has olvidado tu contraseña?</Link>
            <br />
            <Link to="/register">
              ¿No tienes una cuenta? <span className="bold">Registrate</span>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
