import React, { Component } from "react";
import Modal from "../Modal/Modal";
import list from "../../data/data.json"

export default class Prices extends Component {
  render() {
    return (
      <div className="row card-precios mb-4 vstack">
        <div className="header-card px-3">
          <div className="title-card p-4">
            <p className="m-0">Gestión de precios</p>
          </div>
          <div className="row header-title py-3" style={{borderBottom:'1px solid #EAEBEB'}}>
            <div className="col">Inicial</div>
            <div className="col">Final</div>
            <div className="col">Corriente</div>
            <div className="col">Extra</div>
            <div className="col">Editar</div>
          </div>
        </div>

        <div className="body-card pb-3 px-3">
          {
            list.prices.map((row) => {
              return(
                <div className="row item-precio py-3">
                  <div className="col">{row.initialDate}</div>
                  <div className="col">{row.finalDate}</div>
                  <div className="col">${row.corriente}</div>
                  <div className="col">${row.extra}</div>
                  <div className="col">
                    <i className="fas fa-edit" 
                    type="button" 
                    title="Editar"
                    data-bs-toggle="modal" 
                    data-bs-target="#editar-precios"
                    >
                    </i>
                  </div>
              </div>
              )
            })
          }
          <div className="row footer-card py-2">
            <div className="col">
              <i 
                class="fas fa-plus" 
                type="button" 
                title="Agregar"
                data-bs-toggle="modal" 
                data-bs-target="#agregar-precios"
              >
              </i>
            </div>
          </div>
        </div>

        <Modal 
          id="editar-precios" 
          title="Editar rango y precio"
          textbtn="Guardar"
          body={
            <>
            <div className="mb-3">
              <div className="mb-3 row">
                <label className="col-sm-5 col-form-label fw-normal">Fecha inicial :</label>
                <div className="col-sm-7">
                  <input type="date" className="form-control" />
                </div>
              </div>
            </div>
            <div className="mb-4 row">
              <label className="col-sm-5 col-form-label fw-normal">Fecha final :</label>
              <div className="col-sm-7">
                <input type="date" className="form-control" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label mb-4">Precios de gasolinas</label>
              <div className="mb-3 row">
                <label className="col-sm-5 col-form-label fw-normal">Gasolina corriente :</label>
                <div className="col-sm-7">
                  <input type="number" className="form-control" placeholder="$" min="0"/>
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-5 col-form-label fw-normal">Gasolina extra :</label>
                <div className="col-sm-7">
                  <input type="number" className="form-control" placeholder="$" min="0"/>
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
                <label className="col-sm-5 col-form-label fw-normal">Fecha inicial :</label>
                <div className="col-sm-7">
                  <input type="date" className="form-control" />
                </div>
              </div>
            </div>
            <div className="mb-4 row">
              <label className="col-sm-5 col-form-label fw-normal">Fecha final :</label>
              <div className="col-sm-7">
                <input type="date" className="form-control" />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label mb-4">Precios de gasolinas</label>
              <div className="mb-3 row">
                <label className="col-sm-5 col-form-label fw-normal">Gasolina corriente :</label>
                <div className="col-sm-7">
                  <input type="number" className="form-control" placeholder="$" min="0"/>
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-5 col-form-label fw-normal">Gasolina extra :</label>
                <div className="col-sm-7">
                  <input type="number" className="form-control" placeholder="$" min="0"/>
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