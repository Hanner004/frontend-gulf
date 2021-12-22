import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Users({role, token}) {

  const [users, setUsers] = useState([]);

  function getUsers() {
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
        setUsers(list)
      })
      .catch((err)=>{console.log(err)});
  }

  useEffect(()=>{
    getUsers();
  }, []);

  return (
    <div className="row card-usuarios">
      <div className="header-card px-4">
        <div className="title-card p-4">
          <p className="m-0">Usuarios</p>
        </div>
      </div>
      <div className="body-card pb-4 px-5">
        <div className="row my-3">
          <div className="col item-usuario py-3">
            <i className="fas fa-user"></i>
            <p className="mt-3 mb-0">{users&&users.length&&users[0].name}</p>
          </div>
          <div className="col item-usuario py-3 mx-3">
            <i className="fas fa-user"></i>
            <p className="mt-3 mb-0">{users&&users.length&&users[1].name}</p>
          </div>
          <div
            className="col item-usuario py-3"
            type="button"
            title="Ver usuarios"
          >
            <Link
              to="/gestion-usuarios"
              className="vstack justify-content-center text-decoration-none"
              style={{ color: "#003845" }}
            >
              <i className="far fa-eye" style={{ fontSize: "30px" }}></i>
              Ver todos los
              <br />
              usuarios
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}