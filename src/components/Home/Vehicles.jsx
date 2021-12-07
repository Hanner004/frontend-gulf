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
    const { user } = this.props;
    return (
      <>
      <div className="row vehicles-user">
        <div className="card-user">
          <h5 className="card-header title-cars-user p-3">Vehículos</h5>
          <div className="card-body px-2">
            {
              user.cars &&
              user.cars.map((car)=>{
                return(
                  <div style={{minWidth:'12rem', margin:'10px 10px 10px 0'}}>
                    <div className="item-car car-body p-4">
                      <div>
                        <FontAwesomeIcon icon={faCarAlt} style={{fontSize:'60px'}}/>
                        <h6 className="m-0">{car.model}</h6>
                        <p>{car.placa}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            <button
              className="btn item-car"
              data-bs-toggle="modal"
              data-bs-target="#addVehicle"
              style={{minWidth:'12rem', margin:'10px 0 10px 0'}}
            >
              <FontAwesomeIcon icon={faPlusCircle} className="fs-1" />
              <p className="mb-0">Agregar<br />vehículo</p>
            </button>
          </div>
        </div>
      </div>

      <Modal
        id="addVehicle"
        title="Agregar vehículo"
        textbtn="Agregar"
        body={
          <>
          <div class="mb-3">
            <label class="form-label">Modelo</label>
            <input
              type="text"
              class="form-control"
              placeholder="Modelo"
            />
          </div>
          <div class="mb-3 d-flex">
            <div className="w-50 me-2">
              <label class="form-label">Placa</label>
              <input
                type="text"
                class="form-control"
                placeholder="Placa"
              />
            </div>
            <div className="w-50 ms-2">
              <label class="form-label">Capacidad</label>
              <input
                type="number"
                class="form-control"
                placeholder="0"
                min="0"
              />
            </div>
          </div>
          </>
        }
      />
      </>
    );
  }
}
