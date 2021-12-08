import React from "react";

export default function AddUser(){
  return (
    <div className="container-fluid p-5 color">
      <div className="row main-title px-4" style={{ color: "#4A5759" }}>
        <h1>
          <b>Agregar Usuario</b>
        </h1>
        <p>Datos básicos</p>
      </div>
      <form action="/" className="form">
        <div className="mb-3 row px-4">
          <label className="col-form-label">Foto :</label>
          <div className="col-6">
            <label htmlFor="avatarUploader" className="col-form-label">
              <img
                id="avatarImg"
                className="img-thumbnail mx-auto"
                src="./img/img1.jpg"
                alt="Foto del Usuario"
                width="100"
                height="100"
              />
            </label>
            <input
              type="file"
              className="form-control"
              id="avatarUploader"
            />
          </div>
        </div>
        <div className="mb-3 row px-4">
          <div className="col">
            <label className="col-form-label">Tipo de Documento :</label>
            <select
              id="tDocInput"
              className="form-select"
              placeholder="Tipo de Documento"
              defaultValue="-"
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
            <label className="col-form-label">
              Número de Documento de Identificación :
            </label>
            <input
              id="nDocInput"
              type="text"
              className="form-control"
              placeholder=""
              required
            />
          </div>
        </div>
        <div className="mb-3 row px-4">
          <div className="col">
            <label className="col-form-label">Nombres :</label>
            <input
              id="namedInput"
              type="text"
              className="form-control"
              placeholder=""
              required
            />
          </div>
          <div className="col">
            <label className="col-form-label">Apellidos :</label>
            <input
              id="lastnamedInput"
              type="text"
              className="form-control"
              placeholder=""
              required
            />
          </div>
        </div>
        <div className="mb-3 row px-4">
          <div className="col">
            <label className="col-form-label">Email :</label>
            <input
              id="emailInput"
              type="email"
              className="form-control"
              placeholder=""
              required
            />
          </div>
          <div className="col">
            <label className="col-form-label">Teléfono :</label>
            <input
              id="phoneInput"
              type="tel"
              className="form-control"
              placeholder=""
              required
            />
          </div>
        </div>
        <div className="mb-3 row px-4">
          <div className="col">
            <label className="col-form-label">Rol :</label>
            <select
              id="rolInput"
              className="form-select"
              placeholder="Rol"
              defaultValue="-"
              required
            >
              <option value="-">Seleccione</option>
              <option value="Ext">Usuario Externo - Cliente</option>
              <option value="Int">Usuario Interno - Empleado</option>
            </select>
          </div>
          <div className="col">
            <label className="col-form-label">Estado :</label>
            <select
              id="stateInput"
              className="form-select"
              placeholder="Estado"
              defaultValue="-"
              required
            >
              <option value="-">Seleccione</option>
              <option value="A">Habilitado</option>
              <option value="I">Inhabilitado</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row px-4">
          <div className="col">
            <label className="col-form-label">Contraseña :</label>
            <input
              id="passwordInput"
              type="password"
              className="form-control"
              placeholder=""
            />
          </div>
          <div className="col">
            <label className="col-form-label">Confirmar Contraseña :</label>
            <input
              id="confPassInput"
              type="password"
              className="form-control"
              placeholder=""
            />
          </div>
        </div>
        <div className="mb-3 row p-4">
          <div className="col"></div>
          <div className="btn-group col">
            <input
              type="button"
              className="btn btn-secondary btn-sm px-4 btn-gulf"
              value="Agregar"
            />
            <input
              type="reset"
              className="btn btn-secondary btn-sm px-4 btn-gulf"
              value="Borrar"
            />
            <input
              type="button"
              className="btn btn-secondary btn-sm px-4 btn-gulf"
              value="Cancelar"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
