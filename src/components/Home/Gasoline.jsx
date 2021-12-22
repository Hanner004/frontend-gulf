import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import axios from "axios";

export default function Gasoline(props) {
  const { session } = props;

  const [gasolines, setGasolines] = useState([]);

  const getGasolines = async () => {
    let URL = `http://localhost:4000/api/gasoline`;
    let config = {
      headers: {
        authorization: "Bearer " + session.token,
      },
    };
    await axios
      .get(URL, config)
      .then((response) => {
        console.log({
          user: response.data.data,
        });
        setGasolines(response.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getGasolines();
  }, []);

  const [stockCurrent, setCurrent] = useState(0);
  const [stockExtra, setExtra] = useState(0);

  const rechargeGasoline = async (e) => {
    let URL = `http://localhost:4000/api/gasoline`;
    let dataE = {
      "type": "Extra",
      "stock":stockExtra,
      "operation":"Recharge"
    };
    let dataC = {
      "type": "Corriente",
      "stock":stockCurrent,
      "operation":"Recharge"
    };
    let config = {
      headers: {
        authorization: "Bearer " + session.token,
      },
    };
    await axios
      .put(URL, dataE, config)
      /* .then((response) => {
        console.log(response.data);
      }) */
      .catch((error) => {
        console.log(error.message);
      });
      await axios
      .put(URL, dataC, config)
      /* .then((response) => {
        console.log(response.data);
      }) */
      .catch((error) => {
        console.log(error.message);
      });

  };


  function formatDec(dat) {
    return dat.toLocaleString("es-co", { style: "decimal" });
  }


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
          gasolines.map((gas) => {
            return(
              <div className="row item-gasolina py-3" key={gas._id}>
                <div className="col-2"><i className="fas fa-gas-pump"></i></div>
                <div className="col-4">{gas.type}</div>
                <div className="col-3">{formatDec(gas.stock)}</div>
                <div className="col-3">{gas.status}</div>
              </div>
            )
          })
        }
      </div>

      <Modal
        id="estado-gasolina"
        title="Gestión de gasolina"
        textbtn="Guardar"
        submit={rechargeGasoline}
        body={
          <>
            <label className="col-form-label mb-3">
              Gasolina corriente :
            </label>
           {/*  <div className="mb-3 row">
              <label className="col-sm-5 col-form-label fw-normal">
                Estado :
              </label>
              <div className="col-sm-7">
                <select className="form-select">
                  <option>Activo</option>
                  <option>Inactivo</option>
                </select>
              </div>
            </div> */}
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
                  onChange={(e) => {
                    setCurrent(e.target.value);
                  }}
                />
              </div>
            </div>
            <label className="col-form-label mb-3">Gasolina extra :</label>
            {/* <div className="mb-3 row">
              <label className="col-sm-5 col-form-label fw-normal">
                Estado :
              </label>
              <div className="col-sm-7">
                <select className="form-select">
                  <option>Activo</option>
                  <option>Inactivo</option>
                </select>
              </div>
            </div> */}
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
                  onChange={(e) => {
                    setExtra(e.target.value);
                  }}
                />
              </div>
            </div>
          </>
        }
      />
    </div>
  );
}
