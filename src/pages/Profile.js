import React from "react";
import Layout from "../components/Main/Layout";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";

const Profile= () => {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Layout>
        <div className="container-fluid px-4 main">
          <div className="container">
            <h1 className="title">Perfil</h1>
            <p className="subtitle">Datos básicos</p>
            <form action="/" className="form">
              <div className="row">
                <div className="col-1">
                </div>
                <div className="col-2">
                  <label htmlFor="avatarUploader">
                    <img id="avatarImg" className="img-thumbnail mx-auto d-block" src="./img/image-kira.jpg" alt="Foto del Usuario" width="160" height="160" />
                    <input type="file" className="form-control" id="avatarUploader" hidden/>
                  </label>
                </div>
                <div className="col">
                <div className="row">
                    <div className="col">
                      <div className="form-floating mb-3 form-group has-feedback">
                        <i class="fa fa-user form-control-feedback" />
                        <input id="namedInput" type="text" className="form-control" placeholder="Nombres"  value="Vanessa" readOnly />
                        <label htmlFor="namedInput">Nombres</label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-floating mb-3">
                        <input id="lastnamedInput" type="text" className="form-control" placeholder="Apellidos" value="Mendoza Romero" readOnly />
                        <label htmlFor="lastnamedInput">Apellidos</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-floating mb-3">
                        <select id="tDocInput" className="form-control" placeholder="Tipo de Documento" defaultValue="CC" readOnly>
                          <option value="CA">Carnét Diplomático</option>
                          <option value="CC">Cédula de Ciudadanía</option>
                          <option value="CE">Cédula de Extranjería</option>
                          <option value="PA">Pasaporte</option>
                          <option value="PEP">Permiso Especial de Permanencia</option>
                          <option value="PPT">Permiso de Protección Temporal</option>
                          <option value="TI">Tarjeta de Identidad</option>
                        </select> 
                        <label htmlFor="tDocInput">Tipo de Documento</label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-floating mb-3">
                        <input id="nDocInput" type="text" className="form-control" placeholder="Número de Documento de Identificación" value="1234567891" readOnly />
                        <label htmlFor="nDocInput">Número de Documento de Identificación</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-floating mb-3">
                        <input id="emailInput" type="email" className="form-control" placeholder="Email" value="vanessa@gmail.com" readOnly />
                        <label htmlFor="emailInput">Email</label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-floating mb-3">
                        <input id="phoneInput" type="tel" className="form-control" placeholder="Teléfono" value="3015647834" readOnly />
                        <label htmlFor="phoneInput">Teléfono</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex align-items-center justify-content-end">
                    <input type="button" className="btn btn-outline-primary btn-gulf" value="Editar" />
                    <input type="button" className="btn btn-outline-primary btn-gulf" value="Cancelar" />
                  </div>
                </div>
              </div>  
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Profile;