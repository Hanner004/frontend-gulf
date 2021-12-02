import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Users extends Component {
  render() {
    return (
      <div className="row card-usuarios">
        <div className="header-card px-4">
          <div className="title-card p-4">
            <p className="m-0">Usuarios</p>
          </div>
        </div>
        <div className="body-card pb-4 px-5">
          <div className="row my-3"> 
            <div className="col item-usuario py-3">
              <i className="fas fa-user"></i>
              <p className="mt-3 mb-0">Nombre user</p>
            </div>
            <div className="col item-usuario py-3 mx-3">
              <i className="fas fa-user"></i>
              <p className="mt-3 mb-0">Nombre user</p>
            </div>
            <div className="col item-usuario py-3" type="button" title="Ver usuarios">
              <Link 
                to="/#/viewUsers" 
                className="vstack justify-content-center text-decoration-none"
                style={{color:'#003845'}}
              >
                <i className="far fa-eye" style={{fontSize:'30px'}}></i>
                Ver todos los<br/>usuarios
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}