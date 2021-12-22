import React from "react";
import "./main.css";
import Gasoline from "../Home/Gasoline";
import Users from "../Home/Users";
import Prices from "../Home/Prices";
import Modal from "../Modal/Modal";

export default function Admin(props) {
  const { user, prices } = props;
  return (
    <div className="container-fluid p-5 main">
      <div className="row px-4" style={{ color: "#4A5759" }}>
        <h1>
          <b>Hola {user.name},</b>
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
      </div>
      <div className="row px-4">
        <div className="col-sm-6 py-4 pe-5">
          <Gasoline session={session} />
          <Users role={user.role} token={session.token}/>
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
          <Prices prices={prices}/>
        </div>
      </div>

      <Modal
        id="tanquear"
        title="Tanquear vehículo"
        textbtn="Pagar"
        body={
          <>
            <div className="mb-3">
              <label className="form-label">Identificación de usuario</label>
              <input
                type="number"
                className="form-control"
                placeholder="Identificación"
                min="0"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Vehículo</label>
              <select className="form-select">
                {/* {user.cars.length &&
                  user.cars.map((car) => {
                    return (
                      <option key={car._id}>
                        {car.model} - {car.placa}
                      </option>
                    );
                  })} */}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Tipo de gasolina</label>
              <select className="form-select">
                <option>Gasolina corriente</option>
                <option>Gasolina extra</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Cantidad de gasolina (Galones)
              </label>
              <input
                type="number"
                className="form-control"
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
