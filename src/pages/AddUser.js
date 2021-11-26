import React from "react";
import Layout from "../components/Main/Layout";
import Navbar from "../components/Navbar/Navbar";

const AddUser= () => {
  return (
    <div className="App">
      <Navbar />
      <Layout>
        <div className="container-fluid main">
          <div className="container">
            <h1 className="title">Agregar Usuario</h1>
            <p className="subtitle">Datos básicos</p>
            <form action="/" className="form">
              <div className="row mb-3">
                <label for="avatarUploader">
                  <img id="avatarImg" className="img-thumbnail rounded-circle mx-auto d-block" src="./img/img1.jpg" alt="Foto del Usuario" width="100" height="100" />
                  <input type="file" class="form-control" id="avatarUploader" hidden/>
                </label>
              </div>
            <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <select id="tDocInput" className="form-control" placeholder="Tipo de Documento" defaultValue="CC">
                      <option value="CA">Carnét Diplomático</option>
                      <option value="CC">Cédula de Ciudadanía</option>
                      <option value="CE" selected>Cédula de Extranjería</option>
                      <option value="PA" selected>Pasaporte</option>
                      <option value="PEP" selected>Permiso Especial de Permanencia</option>
                      <option value="PPT" selected>Permiso de Protección Temporal</option>
                      <option value="TI">Tarjeta de Identidad</option>
                    </select> 
                    <label htmlFor="tDocInput">Tipo de Documento</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating mb-3">
                    <input id="nDocInput" type="text" className="form-control" placeholder="Número de Documento de Identificación" />
                    <label htmlFor="nDocInput">Número de Documento de Identificación</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input id="namedInput" type="text" className="form-control" placeholder="Nombres" />
                    <label htmlFor="namedInput">Nombres</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating mb-3">
                    <input id="lastnamedInput" type="text" className="form-control" placeholder="Apellidos" />
                    <label htmlFor="lastnamedInput">Apellidos</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input id="emailInput" type="email" className="form-control" placeholder="Email" />
                    <label htmlFor="emailInput">Email</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating mb-3">
                    <input id="phoneInput" type="tel" className="form-control" placeholder="Teléfono" />
                    <label htmlFor="phoneInput">Teléfono</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <select id="rolInput" className="form-control" placeholder="Rol" defaultValue="UI">
                      <option value="UE">Usuario Externo - Cliente</option>
                      <option value="UI">Usuario Interno - Empleado</option>
                    </select> 
                    <label htmlFor="tDocInput">Rol</label>
                  </div>
                </div>
                <div className="col">
                <div className="form-floating mb-3">
                    <select id="stateInput" className="form-control" placeholder="Estado" defaultValue="A">
                      <option value="A">Habilitado</option>
                      <option value="I">Inhabilitado</option>
                    </select> 
                    <label htmlFor="stateInput">Estado</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-floating mb-3">
                    <input id="passwordInput" type="password" className="form-control" placeholder="Contraseña" />
                    <label htmlFor="passwordInput">Contraseña</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating mb-3">
                    <input id="confPassInput" type="password" className="form-control" placeholder="Confirmar Contraseña" />
                    <label htmlFor="confPassInput">Confirmar Contraseña</label>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <input type="button" className="btn btn-outline-primary btn-gulf" value="Agregar" />
                <input type="reset" className="btn btn-outline-primary btn-gulf" value="Borrar" />
                <input type="button" className="btn btn-outline-primary btn-gulf" value="Cancelar" />
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default AddUser;