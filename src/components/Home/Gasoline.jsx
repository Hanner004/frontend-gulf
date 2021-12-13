import React, { Component } from "react";
import Modal from "../Modal/Modal";
import list from "../../data/data.json"

export default class Gasoline extends Component {
  render() {
    return (
      <div className="row card-gasolinas mb-4 vstack">
        <div className="header-card px-4">
          <div className="title-card p-4">
            <p className="m-0">Gasolinas</p>
            <i
              className="fas fa-edit"
              type="button"
              title="Editar"
              data-bs-toggle="modal"
              data-bs-target="#estado-gasolina"
            ></i>
          </div>
          <div className="row header-title py-2">
            <div className="col-2"></div>
            <div className="col-4">Gasolina</div>
            <div className="col-3">
              Galones
              <br />
              disponibles
            </div>
            <div className="col-3">Estado</div>
          </div>
        </div>
        <div className="body-card pb-4 px-5">
          {
            list.gasolines.length &&
            list.gasolines.map((gasoline) => {
              return(
                <div className="row item-gasolina py-3">
                  <div className="col-2"><i className="fas fa-gas-pump"></i></div>
                  <div className="col-4">{gasoline.tipe}</div>
                  <div className="col-3">{gasoline.cant}</div>
                  <div className="col-3">{gasoline.state}</div>
                </div>
              )
            })
          }
        </div>

        <Modal
          id="estado-gasolina"
          title="Gestión de gasolina"
          textbtn="Guardar"
          body={
            <>
              <label className="col-form-label mb-3">
                Gasolina corriente :
              </label>
              <div className="mb-3 row">
                <label className="col-sm-5 col-form-label fw-normal">
                  Estado :
                </label>
                <div className="col-sm-7">
                  <select className="form-select">
                    <option>Activo</option>
                    <option>Inactivo</option>
                  </select>
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-5 col-form-label fw-normal">
                  Cantidad de galones :
                </label>
                <div className="col-sm-7">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="0"
                    min="0"
                  />
                </div>
              </div>
              <label className="col-form-label mb-3">Gasolina extra :</label>
              <div className="mb-3 row">
                <label className="col-sm-5 col-form-label fw-normal">
                  Estado :
                </label>
                <div className="col-sm-7">
                  <select className="form-select">
                    <option>Activo</option>
                    <option>Inactivo</option>
                  </select>
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-5 col-form-label fw-normal">
                  Cantidad de galones :
                </label>
                <div className="col-sm-7">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="0"
                    min="0"
                  />
                </div>
              </div>
            </>
          }
        />
      </div>
    );
  }
}
