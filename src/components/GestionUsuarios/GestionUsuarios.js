import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./GestionUsuarios.css";
import TablaUsuarios from "./TablaUsuarios";
import List from "../../data/data.json";

export function GestionUsuarios({role}) {

  // const [data, setData] = useState(List.users);
  let data = []
  role === "int" ?
    List.users.map((user)=>user.rol!="Administrador"&&data.push(user)):
    data = List.users

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
            {data.map((usuario) => (
              <TablaUsuarios key={usuario.id} usuario={usuario} />
            ))}
          </tbody>
        </Table>
      </section>
      <section className="add-btn">
        <Link to={"/adduser"}>
          <button type="submit" className="add-user-btn">
            Agregar usuario
          </button>
        </Link>
      </section>
    </div>
  );
}
