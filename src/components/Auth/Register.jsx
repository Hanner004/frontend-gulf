import React, { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "./Auth.css";

export default function Register() {
  const [tDoc, setTDoc] = useState("");
  const [numDoc, setNumDoc] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [phone, setPhone] = useState("");

  const sendData = (e) => {
    e.preventDefault();
    if (password == confirmation) {
      let datos = {
        tDoc,
        numDoc,
        name,
        lastname,
        email,
        password,
        phone,
      };
      fetch("http://localhost:4000/api/auth/register", {
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
            localStorage.setItem("user", JSON.stringify(data.data));
            swal({
              title: "Éxito",
              text: data.msg,
              icon: "success",
              buttons: false,
              timer: 2500,
            }).then(function () {
              window.location.href = "/login";
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      swal({
        title: "Error",
        text: "Las contraseñas debe ser iguales",
        icon: "error",
        buttons: false,
        timer: 2500,
      });
    }
  };

  return (
    <div className="container-flex form-background form-register">
      <form onSubmit={sendData}>
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
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              name="lastname"
              placeholder="Apellido"
              onChange={(e) => {
                setLastname(e.target.value);
              }}
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
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="tel"
              name="tel"
              placeholder="Teléfono"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="form-group row p-2 mb-2">
          <div className="col">
            <select
              className="form-control p-0"
              type="text"
              name="TipeID"
              placeholder="Tipo de identificación"
              onChange={(e) => {
                setTDoc(e.target.value);
              }}
              required
            >
              <option selected disabled value="">
                &nbsp;&nbsp;&nbsp;Tipo de identificación
              </option>
              <option value="CC" className="text-center">
                Cédula de ciudadanía
              </option>
              <option value="CE" className="text-center">
                Cédula de extranjería
              </option>
              <option value="TI" className="text-center">
                Tarjeta de identidad
              </option>
            </select>
          </div>
          <div className="col">
            <input
              className="form-control"
              type="number"
              name="id"
              placeholder="Número de identificación"
              onChange={(e) => {
                setNumDoc(e.target.value);
              }}
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
              minLength="5"
              placeholder="Contraseña"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Confirmación"
              onChange={(e) => {
                setConfirmation(e.target.value);
              }}
              required
            />
          </div>
        </div>
        <div className="form-group p-2">
          <button type="submit" className="btn btn-light btnSubmit">
            <span className="bold">Registrarse</span>
          </button>
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
