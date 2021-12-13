import React, { Component } from "react";
import "./main.css";
import Gasoline from "../Home/Gasoline";
import Users from "../Home/Users";
import Prices from "../Home/Prices";
import Modal from "../Modal/Modal";

export default class Int extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="container-fluid p-5 main">
        <div className="row main-title px-4" style={{ color: "#4A5759" }}>
          <h1>
            <b>Hola {user.name},</b>
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
        </div>
        <div className="row px-4">
          <div className="col-sm-6 py-4 pe-5">
            <Gasoline />
            <Users role={user.role} />
          </div>
          <div className="col-sm-6 py-4">
            <div className="row mb-4">
              <div className="buttons-admin">
                <button
                  className="btn-tanquear py-2 px-3"
                  data-bs-toggle="modal"
                  data-bs-target="#tanquear"
                >
                  <p className="mb-0 me-2">Tanquear vehículo</p>
                  <i className="fas fa-gas-pump me-2"></i>
                </button>
              </div>
            </div>
            <Prices />
          </div>
        </div>

        <Modal
          id="tanquear"
          title="Tanquear vehículo"
          textbtn="Pagar"
          body={
            <>
              <div class="mb-3">
                <label class="form-label">Identificación de usuario</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="Identificación"
                  min="0"
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Vehículo</label>
                <select class="form-select">
                  {
                    user.cars.length &&
                    user.cars.map((car)=>{
                      return(
                        <option>{car.model} - {car.placa}</option>
                      )
                    })
                  }
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label">Tipo de gasolina</label>
                <select class="form-select">
                  <option>Gasolina corriente</option>
                  <option>Gasolina extra</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label">Cantidad de gasolina (Galones)</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="0"
                  min="0"
                  max="10"
                />
              </div>
            </>
          }
        />
      </div>
    );
  }
}
