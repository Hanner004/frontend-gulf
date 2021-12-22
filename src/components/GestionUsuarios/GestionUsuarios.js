import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./GestionUsuarios.css";
import TablaUsuarios from "./TablaUsuarios";

export function GestionUsuarios({role}) {

  const [datos, setData] = useState([]);
  let token = false
  if (localStorage.getItem("session")) {
    var data = JSON.parse(localStorage.getItem("session"))
    token = data.token
  }
  
  function fetchData() {
    fetch("http://localhost:4000/api/users",{
      method: 'GET',
      headers: {'Authorization': 'Bearer '+token},
      })
      .then((response) => response.json())
      .then((data) => {
        let list = []
        role === "int" ?
          data.data.map((user)=>user.role!="admin"&&list.push(user)):
          list = data.data
        setData(list)
      })
      .catch((err)=>{console.log(err)});
  }

  useEffect(()=>{
    fetchData();
  }, []);

  return (
    <div className="gestion px-4">
      <section className="encabezado">
        <h1><b>Gestión de usuarios</b></h1>
        <h6>Usuarios externos, internos y administradores</h6>
      </section>

      <section className="tabla">
        <Table responsive className="tabla-usuarios">
          <thead>
            <tr className="encabezado-tabla">
              <th scope="col">
                <strong>#</strong>
              </th>
              <th>Nombre</th>
              <th>Identificación</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Acción</th>
            </tr>
          </thead>

          <tbody>
            {
              datos && datos.length > 0 &&
              datos.map((usuario, index) => (
                <TablaUsuarios key={usuario._id} num={index+1} usuario={usuario} token={token}/>
            ))}
          </tbody>
        </Table>
      </section>
      <section className="add-btn pb-4">
        <Link to={"/adduser"}>
          <button className="add-user-btn">
            Agregar usuario
          </button>
        </Link>
      </section>
    </div>
  );
}
