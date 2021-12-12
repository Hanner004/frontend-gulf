import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./User.css"
import list from "../../data/data.json"
// import imgDefault from "./public/img/img1.jpg"

export default function EditUser(props){

  const usuario = props.user;
  const {id} = useParams();
  const client = list.users.find(user => user.id == id);

  return (
    <div className="container-fluid p-5 main-User">
      <div className="row px-4">
        <h1 style={{ color: "#4A5759" }}>
          <b>Editar usuario {client.nombre}</b>
        </h1>
        <p>Datos básicos</p>
      </div>

      <form action="/" className="form px-4">
        <div className="mb-5 row photo-user">
          <div className="col-6">
            <label htmlFor="avatarUploader">
              <img
                id="avatarImg"
                className="img-thumbnail mx-auto"
                src={'/img/img1.jpg'}
                alt="Foto del Usuario"
                width="150"
                height="150"
              />
            </label>
            <input
              type="file"
              className="form-control mt-3"
              id="avatarUploader"
            />
          </div>
        </div>

        <div className="data mb-5 px-5">
          <div className="mb-4 row">
            <div className="col">
              <label>Tipo de documento :</label>
              <select
                id="tDocInput"
                className="form-select"
                placeholder="Tipo de Documento"
                defaultValue={client.tipeId}
                required
              >
                <option value="-">Seleccione</option>
                <option value="CA">Carnét Diplomático</option>
                <option value="CC">Cédula de Ciudadanía</option>
                <option value="CE">Cédula de Extranjería</option>
                <option value="PA">Pasaporte</option>
                <option value="PEP">Permiso Especial de Permanencia</option>
                <option value="PPT">Permiso de Protección Temporal</option>
                <option value="TI">Tarjeta de Identidad</option>
              </select>
            </div>
            <div className="col">
              <label>
                Número de documento de identificación :
              </label>
              <input
                id="nDocInput"
                type="number"
                className="form-control"
                min="0"
                defaultValue={client.identificacion}
                placeholder="&#xf47f;"
                required
              />
            </div>
          </div>

          <div className="mb-4 row ">
            <div className="col">
              <label>Nombres :</label>
              <input
                id="namedInput"
                type="text"
                className="form-control"
                defaultValue={client.nombre}
                placeholder="&#xf406;"
                required
              />
            </div>
            <div className="col">
              <label>Apellidos :</label>
              <input
                id="lastnamedInput"
                type="text"
                className="form-control"
                defaultValue={client.apellidos}
                placeholder="&#xf406;"
                required
              />
            </div>
          </div>

          <div className="mb-4 row ">
            <div className="col">
              <label>Email :</label>
              <input
                id="emailInput"
                type="email"
                className="form-control"
                defaultValue={client.email}
                placeholder="&#xf1fa;"
                required
              />
            </div>
            <div className="col">
              <label>Teléfono :</label>
              <input
                id="phoneInput"
                type="tel"
                className="form-control"
                defaultValue={client.telefono}
                placeholder="&#xf095;"
                required
              />
            </div>
          </div>

          {
            usuario.role==="admin" &&
            <div className="mb-4 row ">
              <div className="col">
                <label>Rol :</label>
                <select
                  id="rolInput"
                  className="form-select"
                  placeholder="Rol"
                  defaultValue={client.rol}
                  required
                >
                  <option value="-">Administrador</option>
                  <option value="Externo">Usuario Externo - Cliente</option>
                  <option value="Interno">Usuario Interno - Empleado</option>
                </select>
              </div>
              <div className="col">
                <label>Estado :</label>
                <select
                  id="stateInput"
                  className="form-select"
                  placeholder="Estado"
                  defaultValue={client.estado}
                  required
                >
                  <option value="-">Seleccione</option>
                  <option value="A">Habilitado</option>
                  <option value="I">Inhabilitado</option>
                </select>
              </div>
            </div>
          }

          <div className="mb-4 row ">
            <div className="col">
              <label>Contraseña :</label>
              <input
                id="passwordInput"
                type="password"
                className="form-control"
                placeholder="&#xf023;"
              />
            </div>
            <div className="col">
              <label>Confirmar contraseña :</label>
              <input
                id="confPassInput"
                type="password"
                className="form-control"
                placeholder="&#xf023;"
              />
            </div>
          </div>
        </div>

        <div className="mb-4 row py-4 px-5 justify-content-center">
          <Link
            type="button"
            to="/gestion-usuarios"
            className="btn px-4 btn-gulf">
            Cancelar
          </Link>
          <input
            type="button"
            className="btn px-4 btn-gulf"
            value="Guardar"
          />
        </div>
      </form>
    </div>
  );
}
