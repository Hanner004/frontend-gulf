import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./User.css"

export default function Profile(props){
  
  const usuario = props.user;
  function tipeID(tipeID) {
    switch (tipeID) {
      case "CA":
        return "Carnét Diplomático";
      case "CC":
        return "Cédula de Ciudadanía";
      case "CE":
        return "Cédula de Extranjería";
      case "PA":
        return "Pasaporte";
      case "PEP":
        return "Permiso Especial de Permanencia";
      case "PPT":
        return "Permiso de Protección Temporal";
      case "TI":
        return "Tarjeta de Identidad";
      default:
        return "Error";
    }
  }
  
  return (
    <div className="container-fluid p-5 main-fixed">
      <div className="row main-title px-4" style={{ color: "#4A5759" }}>
        <h1>
          <b>Perfil</b>
        </h1>
        <p>Datos básicos</p>
      </div>
      <form action="/" className="form form-profile">
        <div className="mb-3 row px-4">
          <div className="col-2"></div>
          <div className="col-2 align-items-center">
            <label htmlFor="avatarUploader">
              <img
                id="avatarImg"
                className="img-thumbnail rounded-circle mx-auto d-block"
                src="/img/foto.svg"
                alt="Foto del Usuario"
                width="200"
                height="200"
              />
              <input
                type="file"
                className="form-control"
                id="avatarUploader"
                hidden
              />
            </label>
          </div>
          <div className="col-6">
            <div className="mb-3 row px-4">
              <div className="col">
                <label className="col-form-label">Nombres :</label>
                <p>
                  <i className="fa fa-user form-control-feedback" />&nbsp; 
                  {usuario.name}
                </p>
              </div>
              <div className="col">
                <label className="col-form-label">Apellidos :</label>
                <p>
                  <i className="fa fa-user form-control-feedback" />&nbsp; 
                  {usuario.fullname}
                </p>
              </div>
            </div>
            <div className="mb-3 row px-4">
              <div className="col">
                <label className="col-form-label">
                  Tipo de Documento :
                </label>
                <p>
                  <i className="fa fa-address-card form-control-feedback" />&nbsp;
                  {tipeID(usuario.tipeID)}
                </p>
              </div>
              <div className="col">
                <label className="col-form-label">
                  Número de Identificación :
                </label>
                <p>
                  <i className="fa fa-address-card form-control-feedback" />&nbsp;
                  {usuario.identificacion}
                </p>
              </div>
            </div>
            <div className="mb-3 row px-4">
              <div className="col">
                <label className="col-form-label">Email :</label>
                <p>
                  <i className="fa fa-envelope form-control-feedback" />&nbsp;
                  {usuario.email}
                </p>
              </div>
              <div className="col">
                <label className="col-form-label">Teléfono :</label>
                <p>
                  <i className="fa fa-phone form-control-feedback" />&nbsp;
                  {usuario.telefono}
                </p>
              </div>
            </div>
            <div className="mb-4 row py-4">
              <Link
                type="button"
                to="/editProfile"
                className="btn px-4 btn-gulf">
                Editar datos
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
