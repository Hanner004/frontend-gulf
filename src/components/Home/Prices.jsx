import React, { Component } from "react";
import Modal from "../Modal/Modal";
import list from "../../data/data.json";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListGroup } from "react-bootstrap";

export default class Prices extends Component {
  
  render() {
    const prices = this.props.prices;
    return (
      <div className="row card-precios vstack">
        <div className="header-card px-3">
          <div className="title-card p-4">
            <p className="m-0">Gestión de precios</p>
          </div>
          <div className="row header-title py-3">
            <div className="col">Inicial</div>
            <div className="col">Final</div>
            <div className="col">Corriente</div>
            <div className="col">Extra</div>
            <div className="col">Editar</div>
          </div>
        </div>

        <div className="body-card px-3">
          {prices.length > 0 && prices.map( row => {
            return (
              <div className="row item-precio py-3" key={row._id}>
                <div className="col">{row.initialDate}</div>
                <div className="col">{row.finalDate}</div>
                <div className="col">${row.corriente}</div>
                <div className="col">${row.extra}</div>
                <div className="col">
                  <FontAwesomeIcon
                    icon={faEdit}
                    type="button"
                    title="Editar"
                    data-bs-toggle="modal"
                    data-bs-target="#editar-precios"
                    style={{ color: "#003845", fontSize: "20px" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="footer-card py-2">
          <i
            className="fas fa-plus"
            type="button"
            title="Agregar"
            data-bs-toggle="modal"
            data-bs-target="#agregar-precios"
          ></i>
        </div>

        <Modal
          id="editar-precios"
          title="Editar rango y precio"
          textbtn="Guardar"
          body={
            <>
              <div className="mb-3">
                <div className="mb-3 row">
                  <label className="col-sm-5 col-form-label fw-normal">
                    Fecha inicial :
                  </label>
                  <div className="col-sm-7">
                    <input type="date" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="mb-4 row">
                <label className="col-sm-5 col-form-label fw-normal">
                  Fecha final :
                </label>
                <div className="col-sm-7">
                  <input type="date" className="form-control" />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label mb-4">Precios de gasolinas</label>
                <div className="mb-3 row">
                  <label className="col-sm-5 col-form-label fw-normal">
                    Gasolina corriente :
                  </label>
                  <div className="col-sm-7">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="$"
                      min="0"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-5 col-form-label fw-normal">
                    Gasolina extra :
                  </label>
                  <div className="col-sm-7">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="$"
                      min="0"
                    />
                  </div>
                </div>
              </div>
            </>
          }
        />

        <Modal
          id="agregar-precios"
          title="Agregar rango y precio"
          textbtn="Agregar"
          body={
            <>
              <div className="mb-3">
                <div className="mb-3 row">
                  <label className="col-sm-5 col-form-label fw-normal">
                    Fecha inicial :
                  </label>
                  <div className="col-sm-7">
                    <input type="date" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="mb-4 row">
                <label className="col-sm-5 col-form-label fw-normal">
                  Fecha final :
                </label>
                <div className="col-sm-7">
                  <input type="date" className="form-control" />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label mb-4">Precios de gasolinas</label>
                <div className="mb-3 row">
                  <label className="col-sm-5 col-form-label fw-normal">
                    Gasolina corriente :
                  </label>
                  <div className="col-sm-7">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="$"
                      min="0"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label className="col-sm-5 col-form-label fw-normal">
                    Gasolina extra :
                  </label>
                  <div className="col-sm-7">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="$"
                      min="0"
                    />
                  </div>
                </div>
              </div>
            </>
          }
        />
      </div>
    );
  }
}
