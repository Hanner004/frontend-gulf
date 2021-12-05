import React from "react";
import Layout from "../components/Main/Layout";
import Navbar from "../components/Navbar/Navbar";

const Profile= () => {
  return (
    <div className="App">
      <Navbar />
      <Layout>
        <div className="container-fluid p-5 main">
          <div className="row main-title px-4" style={{color:'#4A5759'}}>
            <h1><b>Perfil</b></h1>
            <p>Datos básicos</p>
          </div>
          <form action="/" className="form">
            <div className="mb-3 row px-4">
              <div className="col-2"></div>
              <div className="col-2 align-items-center">
                <label htmlFor="avatarUploader">
                  <img id="avatarImg" className="img-thumbnail rounded-circle mx-auto d-block" src="./foto.svg" alt="Foto del Usuario" width="200" height="200" />
                  <input type="file" className="form-control" id="avatarUploader" hidden/>
                </label>
              </div>
              <div className="col-6">
                <div className="mb-3 row px-4">
                  <div className="col">
                    <label className="col-form-label">Nombres :</label>
                    <p><i className="fa fa-user form-control-feedback" /> Vanessa</p>
                  </div>
                  <div className="col">
                    <label className="col-form-label">Apellidos :</label>
                    <p><i className="fa fa-user form-control-feedback" /> Mendoza Romero</p>
                  </div>
                </div>
                <div className="mb-3 row px-4">
                  <div className="col">
                    <label className="col-form-label">Tipo de Documento :</label>
                    <p><i className="fa fa-address-card form-control-feedback" /> Cédula de Ciudadanía</p>
                  </div>
                  <div className="col">
                    <label className="col-form-label">Número de Identificación :</label>
                    <p><i className="fa fa-address-card form-control-feedback" /> 1234567891</p>
                  </div>
                </div>
                <div className="mb-3 row px-4">
                  <div className="col">
                    <label className="col-form-label">Email :</label>
                    <p><i className="fa fa-envelope form-control-feedback" /> vanessa@gmail.com</p>
                  </div>
                  <div className="col">
                    <label className="col-form-label">Teléfono :</label>
                    <p><i className="fa fa-phone form-control-feedback" /> 3015647834</p>
                  </div>
                </div>
              </div> 
            </div> 
          </form>
        </div>
      </Layout>
    </div>
  );
}

export default Profile;