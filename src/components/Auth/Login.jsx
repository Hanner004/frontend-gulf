import React, { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "./Auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendData = (e) => {
    e.preventDefault();
    let datos = {
      email: email,
      password: password,
    };
    fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.errors) {
          swal({
            title: "Error",
            text: data.errors[0].msg,
            icon: "error",
            buttons: false,
            timer: 2500,
          });
        } else {
          localStorage.setItem("session", JSON.stringify(data))
          swal({
            title: "Bienvenido",
            text: data.msg,
            icon: "success",
            buttons: false,
            timer: 2500,
          }).then(function () {
            window.location.href = "/";
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-flex form-background form-login">
      <form onSubmit={sendData}>
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group p-2 mb-2">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group p-2">
          <button type="submit" className="btn btn-light btnSubmit">
            <span className="bold">Iniciar sesión</span>
          </button>
        </div>
        <div className="forgotPwd text-center pt-2">
          <Link to="#">¿Has olvidado tu contraseña?</Link>
          <br />
          <Link to="/register">
            ¿No tienes una cuenta? <span className="bold">Registrate</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
