import {
  faEdit,
  faTrash,
  faCarAlt,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import Modal from "../Modal/Modal";

export default function Vehicles(props) {
  const { user, session, vehicles } = props;

  const [id, setId] = useState("");
  const [placa, setPlaca] = useState("");
  const [model, setModel] = useState("");
  const [capacity, setCapacity] = useState("");

  const addVehicle = (e) => {
    e.preventDefault();
    let datos = { model: model, placa: placa, capacity: capacity };
    fetch("http://localhost:4000/api/vehicles/users/"+user._id,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer '+session.token
      },
      body:JSON.stringify(datos),
      })
      .then((response) => {return response.json()})
      .then((data) => {
        if (data.errors) {
          if (data.errors[0].msg==="El vehículo se encuentra registrado")
            Swal.fire({
              icon: 'error',
              text: data.errors[0].msg,
              confirmButtonColor: '#20515C'
            })
        }
        else{
          Swal.fire({
            icon: 'success',
            text: 'Vehículo agregado',
            confirmButtonColor: '#20515C'
          })
        }
      })
      .catch((err)=>{console.log(err)});
  }

  // const addVehicle = async () => {
  //   let URL = `http://localhost:4000/api/vehicles/users/${user._id}`;
  //   let data = {
  //     placa,
  //     model,
  //     capacity,
  //   };
  //   let config = {
  //     headers: {
  //       authorization: "Bearer " + session.token,
  //     },
  //   };
  //   await axios
  //     .post(URL, data, config)
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

  function deleteVehicle(idVehicle, placa) {
    Swal.fire({
      title: 'Eliminar vehículo',
      text: `¿Desea eliminar el vehículo de placa ${placa}?`,
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#20515C',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:4000/api/vehicles/"+idVehicle+"/users/"+user._id,{
        method: 'DELETE',
        headers: {'Authorization': 'Bearer '+session.token},
        })
        .then((response) => response.json())
        .then((data) => {
          Swal.fire({
            icon: 'success',
            text: 'Vehículo eliminado',
            confirmButtonColor: '#20515C'
          })
        })
        .catch((err)=>{console.log(err)});
      }
    })
  }

  const updateVehicle = (e) => {
    e.preventDefault();
    let datos = { model: model, placa: placa, capacity: capacity };
    fetch("http://localhost:4000/api/vehicles/"+id+"/users/"+user._id,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer '+session.token
      },
      body:JSON.stringify(datos),
      })
      .then((response) => {return response.json()})
      .then((data) => {
        if (data.errors) {
          if (data.errors[0].msg==="El vehículo se encuentra registrado")
            Swal.fire({
              icon: 'error',
              text: data.errors[0].msg,
              confirmButtonColor: '#20515C'
            })
        }
        else{
          Swal.fire({
            icon: 'success',
            text: 'Vehículo actualizado',
            confirmButtonColor: '#20515C'
          })
        }
      })
      .catch((err)=>{console.log(err)});
  }

  return (
    <>
      <div className="row vehicles-user">
        <div className="card-user">
          <h5 className="card-header title-cars-user p-3">Vehículos</h5>
          <div className="card-body px-2">
            {vehicles &&
              vehicles.map((car) => {
                return (
                  <div
                    key={car._id}
                    style={{ minWidth: "12rem", margin: "10px 10px 10px 0" }}
                  >
                    <div className="item-car car-body" style={{flexDirection:'column'}}>
                      <div className="text-end w-100 p-2">
                        <FontAwesomeIcon 
                          icon={faEdit} 
                          type="button" 
                          style={{fontSize:'18px', marginRight:'8px'}}
                          data-bs-toggle="modal"
                          data-bs-target="#updateVehicle"
                          onClick={()=>{
                            setId(car._id)
                            setModel(car.model);
                            setPlaca(car.placa);
                            setCapacity(car.capacity)
                          }}
                        />
                        <FontAwesomeIcon 
                          icon={faTrash} 
                          type="button" 
                          style={{fontSize:'18px'}}
                          onClick={()=>deleteVehicle(car._id, car.placa)}
                        />
                      </div>
                      <div className="pb-4">
                        <FontAwesomeIcon icon={faCarAlt} style={{fontSize:'60px'}}/>
                        <h6 className="m-0">{car.model}</h6>
                        <p>{car.placa}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            <button
              className="btn item-car"
              data-bs-toggle="modal"
              data-bs-target="#addVehicle"
              style={{ minWidth: "12rem", margin: "10px 0 10px 0" }}
            >
              <FontAwesomeIcon icon={faPlusCircle} className="fs-1" />
              <p className="mb-0">
                Agregar
                <br />
                vehículo
              </p>
            </button>
          </div>
        </div>
      </div>

      <Modal
        id="addVehicle"
        title="Agregar vehículo"
        textbtn="Agregar"
        submit={addVehicle}
        body={
          <>
            <div className="mb-3">
              <label className="form-label">Modelo</label>
              <input
                type="text"
                className="form-control"
                placeholder="Modelo"
                required
                onChange={(e) => {
                  setModel(e.target.value);
                }}
              />
            </div>
            <div className="mb-3 d-flex">
              <div className="w-50 me-2">
                <label className="form-label">Placa</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Placa"
                  required
                  onChange={(e) => {
                    setPlaca(e.target.value);
                  }}
                />
              </div>
              <div className="w-50 ms-2">
                <label className="form-label">Capacidad</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="0"
                  min="0"
                  required
                  onChange={(e) => {
                    setCapacity(e.target.value);
                  }}
                />
              </div>
            </div>
          </>
        }
      />

      <Modal
        id="updateVehicle"
        title="Editar vehículo"
        textbtn="Actualizar"
        submit={updateVehicle}
        body={
          <>
            <div class="mb-3">
              <label class="form-label">Modelo</label>
              <input
                type="text"
                class="form-control"
                placeholder="Modelo"
                value={model}
                onChange={(e) => {setModel(e.target.value)}}
                required
              />
            </div>
            <div class="mb-3 d-flex">
              <div className="w-50 me-2">
                <label class="form-label">Placa</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Placa"
                  value={placa}
                  onChange={(e) => {setPlaca(e.target.value)}}
                  required
                />
              </div>
              <div className="w-50 ms-2">
                <label class="form-label">Capacidad</label>
                <input
                  type="number"
                  class="form-control"
                  placeholder="0"
                  min="0"
                  value={capacity}
                  onChange={(e) => {setCapacity(e.target.value)}}
                  required
                />
              </div>
            </div>
          </>
        }
      />
    </>
  );
}
