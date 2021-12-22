import React, { Component } from "react";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
const moment = require('moment');

export default function Prices({prices}) {

  const [session] = useState(JSON.parse(localStorage.getItem("session")));
  const [initialDate, setInitialDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [amountCurrent, setAmountCurrent] = useState("");
  const [amountExtra, setAmountExtra] = useState("");
  const [id, setId] = useState("");


  /* AGREGAR PRECIOS PARA LA GASOLINA EN RANGOS DE FECHAS*/
  const addPrices = async () => {
    const URL_PRICES = "http://localhost:4000/api/price";
    let data = {
      initialDate,
      endDate,
      amountCurrent,
      amountExtra
    };
    let config = {
      headers: {
        authorization: "Bearer " + session.token,
      },
    };

    await axios
      .post(URL_PRICES, data, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  /* EDITAR PRECIOS PARA LA GASOLINA EN RANGOS DE FECHAS*/
  const editPrices = async () => {
    const URL_PRICES = `http://localhost:4000/api/price/${id}`;
    let data = {
      initialDate,
      endDate,
      amountCurrent,
      amountExtra
    };
    let config = {
      headers: {
        authorization: "Bearer " + session.token,
      },
    };

    await axios
      .put(URL_PRICES, data, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
    
  }


  /* FORMATO FECHA Y DINERO */
  function formatDate(date) {
    return moment(date).format('DD[/]MM[/]YYYY');
  }

  function formatDec(dat) {
    return dat.toLocaleString("es-co", { style: "currency", currency: "COP" });
  }

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
        {prices.map(row => {
          return(
            <div className="row item-precio py-3" key={row._id}>
              <div className="col">{formatDate(row.initialDate.split('T')[0])}</div>
              <div className="col">{formatDate(row.endDate.split('T')[0])}</div>
              <div className="col">{formatDec(row.amountCurrent)}</div>
              <div className="col">{formatDec(row.amountExtra)}</div>
              <div className="col">
                <FontAwesomeIcon
                  icon={faEdit}
                  type="button"
                  title="Editar"
                  onClick={() => setId(row._id)}
                  data-bs-toggle="modal"
                  data-bs-target="#editar-precios"
                  style={{ color: "#003845", fontSize: "20px" }}
                />
              </div>
            </div>
          )
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
        submit={editPrices}
        body={
          <>
            <div className="mb-3">
              <div className="mb-3 row">
                <label className="col-sm-5 col-form-label fw-normal">
                  Fecha inicial :
                </label>
                <div className="col-sm-7">
                  <input
                    type="date"
                    min="2017-04-01 00:00"
                    className="form-control"
                    onChange={(e) => {
                      setInitialDate(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="mb-4 row">
              <label className="col-sm-5 col-form-label fw-normal">
                Fecha final :
              </label>
              <div className="col-sm-7">
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => {
                    setEndDate(e.target.value);
                  }}
                />
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
                    onChange={(e) => {
                      setAmountCurrent(e.target.value)
                    }}
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
                    onChange={(e) => {
                      setAmountExtra(e.target.value)
                    }}
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
        submit={addPrices}
        body={
          <>
            <div className="mb-3">
              <div className="mb-3 row">
                <label className="col-sm-5 col-form-label fw-normal">
                  Fecha inicial :
                </label>
                <div className="col-sm-7">
                  <input
                    type="date"
                    className="form-control"
                    onChange={(e) => {
                      setInitialDate(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="mb-4 row">
              <label className="col-sm-5 col-form-label fw-normal">
                Fecha final :
              </label>
              <div className="col-sm-7">
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) => {
                    setEndDate(e.target.value);
                  }}
                />
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
                    onChange={(e) => {
                      setAmountCurrent(e.target.value)
                    }}
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
                    onChange={(e) => {
                      setAmountExtra(e.target.value)
                    }}
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