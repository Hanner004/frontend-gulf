import React, { Component } from "react";
import "./main.css";
import Money from "../Home/Money";
import Points from "../Home/Points";
import GasolinePrices from "../Home/GasolinePrices";
import History from "../Home/History";
import Vehicles from "../Home/Vehicles";
import { TanquearExterno } from "../Tanquear/TanquearExterno"
import Modal from "../Modal/Modal";

export default class Ext extends Component {
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
        <div className="row">
          <div className="col-sm-7">
            <div className="row px-4">
              <div className="col-sm py-4 pe-5">
                <Money />
              </div>
              <div className="col-sm py-4 pe-5">
                <Points />
              </div>
              <div className="col-sm py-4 pe-5">
                <GasolinePrices />
              </div>
            </div>
            <div className="row mx-3 main-vehicle">
              <Vehicles user={user} />
            </div>
          </div>
          <div className="col-sm-5 pt-4">
            <div className="row mb-4">
              <div className="buttons-ext">
                <button
                  className="btn-tanquear py-2 px-3 me-3"
                  data-bs-toggle="modal"
                  data-bs-target="#cargar"
                >
                  <p className="mb-0 me-2">Cargar saldo</p>
                  <i className="fas fa-donate me-2"></i>
                </button>
                <button
                  className="btn-tanquear py-2 px-3 mx-3"
                  data-bs-toggle="modal"
                  data-bs-target="#tanquear"
                >
                  <p className="mb-0 me-2">Tanquear vehículo</p>
                  <i className="fas fa-gas-pump me-2"></i>
                </button>
              </div>
            </div>
            <History user={user} />
          </div>
        </div>

        <Modal
          id="tanquear"
          title="Tanquear vehículo"
          textbtn="Pagar"
          body={<TanquearExterno vehiculos={user.cars}/>}
        />

        <Modal
          id="cargar"
          title="Cargar saldo"
          textbtn="Cargar"
          body={
            <>
              <div class="mb">
                <label class="form-label">Cantidad de dinero (Pesos)</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="$"
                  min="0"
                />
              </div>
            </>
          }
        />
      </div>
    );
  }
}
