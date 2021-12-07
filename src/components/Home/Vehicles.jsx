import {
  faCar,
  faCarAlt,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import Modal from "../Modal/Modal";

export default class Vehicles extends Component {
  render() {
    return (
      <div className="row text-center bg-white card">
        <h5 className="card-header bg-white text-start">Vehículos</h5>
        <div className="card-body text-center my-4 py-5">
          <div className="row">
            <div className="col card-header rounder m-2">
              <div>
                <FontAwesomeIcon icon={faCarAlt} />
              </div>
              <p>Vehículo 1</p>
              <p>AAA-111</p>
            </div>
            <div className="col card-header rounder m-2">
              <div>
                <FontAwesomeIcon icon={faCarAlt} />
              </div>
              <p>Vehículo 2</p>
              <p>AAA-111</p>
            </div>
            <div className="col card-header rounder m-2">
              <div>
                <FontAwesomeIcon icon={faCarAlt} />
              </div>
              <p>Vehículo 3</p>
              <p>AAA-111</p>
            </div>
            <div className="col card-header rounder m-2">
              <div>
                <FontAwesomeIcon icon={faCarAlt} />
              </div>
              <p>Vehículo 4</p>
              <p>AAA-111</p>
            </div>
            <button
              className="btn col card-header rounder m-2"
              data-bs-toggle="modal"
              data-bs-target="#addVehicle"
            >
              <i>
                <FontAwesomeIcon icon={faPlusCircle} />
              </i>
              <p className="mb-0 me-2">Agregar vehículo</p>
            </button>
            <Modal
              id="addVehicle"
              title="Agregar vehículo"
              textbtn="Agregar"
              body={
                <>
                  <div class="mb">
                    <label class="form-label text-start">Modelo</label>
                    <input type="text" class="form-control" min="0" max="10" />
                    <br />
                    <label class="form-label text-start">Placa</label>
                    <input type="text" class="form-control" min="0" max="10" />
                  </div>
                </>
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
