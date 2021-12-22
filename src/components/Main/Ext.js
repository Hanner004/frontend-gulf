import React, { useEffect, useState } from "react";
import axios from "axios";
import "./main.css";
import Money from "../Home/Money";
import Points from "../Home/Points";
import GasolinePrices from "../Home/GasolinePrices";
import History from "../Home/History";
import Vehicles from "../Home/Vehicles";
import Modal from "../Modal/Modal";

export default function Ext(props) {
  const { user, session } = props;
  const [vehicles, setVehicles] = useState([]);

  // const getVehicles = async () => {
  //   let URL = `http://localhost:4000/api/vehicles/users/${user._id}`;
  //   let data = {};
  //   let config = {
  //     headers: {
  //       authorization: "Bearer " + session.token,
  //     },
  //   };
  //   await axios
  //     .get(URL, config)
  //     .then((response) => {
  //       console.log({
  //         vehicles: response.data.data,
  //       });
  //       setVehicles(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

  function getVehicles() {
    fetch("http://localhost:4000/api/vehicles/users/" + user._id, {
      method: "GET",
      headers: { Authorization: "Bearer " + session.token },
    })
      .then((response) => response.json())
      .then((data) => {
        setVehicles(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const [money, setMoney] = useState("");

  const recharge = async () => {
    let URL = `http://localhost:4000/api/users/${user._id}/wallet`;
    let data = {
      money,
    };
    let config = {
      headers: {
        authorization: "Bearer " + session.token,
      },
    };
    await axios
      .post(URL, data, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const [idVehicle, setIdVehicle] = useState("");
  const [tGasoline, setTGasoline] = useState("");
  const [gallons, setGallons] = useState("");

  const tankExtVehicle = async () => {
    let URL = `http://localhost:4000/api/vehicles/${idVehicle}/tank/users/${user._id}`;
    let data = {
      type: tGasoline,
      gallons,
    };
    let config = {
      headers: {
        authorization: "Bearer " + session.token,
      },
    };
    await axios
      .post(URL, data, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getVehicles();
    // eslint-disable-next-line
  });

  return (
    <div className="container-fluid p-5 main">
      <div className="row main-title px-4" style={{ color: "#4A5759" }}>
        <h1>
          <b>
            Hola {user.name} {user.lastname},
          </b>
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
      </div>
      <div className="row">
        <div className="col-sm-7">
          <div className="row px-4">
            <div className="col-sm py-4 pe-5">
              <Money user={user} />
            </div>
            <div className="col-sm py-4 pe-5">
              <Points />
            </div>
            <div className="col-sm py-4 pe-5">
              <GasolinePrices user={user} session={session} />
            </div>
          </div>
          <div className="row mx-3 main-vehicle">
            <Vehicles user={user} session={session} vehicles={vehicles} />
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
        submit={tankExtVehicle}
        body={
          <>
            <div className="id-usuario-tanquear input-tanquear">
              <label>Vehículo:</label>
              <select
                onChange={(e) => {
                  setIdVehicle(e.target.value);
                }}
                value={idVehicle}
                required
              >
                <option selected disabled value="">
                  Seleccione
                </option>
                {vehicles.map((vehicle) => (
                  <option key={vehicle._id} value={vehicle._id}>
                    {vehicle.model} - {vehicle.placa}
                  </option>
                ))}
              </select>
            </div>
            <div className="row">
              <div className="col-6 tipo-gasolina-tanquear input-tanquear">
                <label>Tipo de gasolina:</label>
                <br />
                <select
                  onChange={(e) => {
                    setTGasoline(e.target.value);
                  }}
                  value={tGasoline}
                  required
                >
                  <option selected disabled value="">
                    Seleccione
                  </option>
                  <option value="Extra">Gasolina extra</option>
                  <option value="Corriente">Gasolina corriente</option>
                </select>
              </div>
              <div className="col-6 cant-gasolina-tanquear input-tanquear">
                <label>Cantidad de gasolina:</label>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  onChange={(e) => {
                    setGallons(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="metodo-pago-tanquear input-tanquear">
              <label>Método de pago:</label>
              <br />
              <select>
                <option value="redimir">Saldo disponible</option>
              </select>
            </div>
          </>
        }
      />

      <Modal
        id="cargar"
        title="Cargar saldo"
        textbtn="Cargar"
        submit={recharge}
        body={
          <>
            <div className="mb">
              <label className="form-label">Cantidad de dinero (Pesos)</label>
              <input
                type="number"
                className="form-control"
                placeholder="$"
                onChange={(e) => {
                  setMoney(e.target.value);
                }}
                min="0"
              />
            </div>
          </>
        }
      />
    </div>
  );
}
