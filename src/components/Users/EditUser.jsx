import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "./User.css";

export default function EditUser(props) {
  const usuario = props.user;
  const { id } = useParams();
  const [client, setClient] = useState([]);
  const [tDoc, setTdoc] = useState(client.tDoc);
  const [numDoc, setNumDoc] = useState(client.numDoc);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [role, setRole] = useState("");
  const [status, setStatus] = useState(true);
  let history = useNavigate();

  let token = false;
  if (localStorage.getItem("session")) {
    var data = JSON.parse(localStorage.getItem("session"));
    token = data.token;
  }

  function getClient() {
    fetch("http://localhost:4000/api/users/" + id, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    })
      .then((response) => response.json())
      .then((data) => {
        setClient(data.data);
        setTdoc(data.data.tDoc);
        setNumDoc(data.data.numDoc);
        setName(data.data.name);
        setLastname(data.data.lastname);
        setEmail(data.data.email);
        setPhone(data.data.phone);
        setRole(data.data.role);
        setStatus(data.data.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getClient();
  }, []);

  const updateUser = (e) => {
    e.preventDefault();
    let datos = {
      tDoc: tDoc,
      numDoc: numDoc,
      name: name,
      lastname: lastname,
      email: email,
      phone: phone,
      role: role,
      status: status,
    };
    fetch("http://localhost:4000/api/users/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(datos),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.errors) {
          if (data.errors[0].msg === "El usuario se encuentra registrado")
            Swal.fire({
              icon: "error",
              text: data.errors[0].msg,
              confirmButtonColor: "#20515C",
            });
        } else {
          history("/gestion-usuarios");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid p-5 main-User">
      <div className="row px-4">
        <h1 style={{ color: "#4A5759" }}>
          <b>Editar usuario {name}</b>
        </h1>
        <p>Datos básicos</p>
      </div>

      <form className="form pt-5 px-4" onSubmit={updateUser}>
        {/* <div className="mb-5 row photo-user">
          <div className="col-6">
            <label htmlFor="avatarUploader">
              <img
                id="avatarImg"
                className="img-thumbnail mx-auto"
                src={'/img/img1.jpg'}
                alt="Foto del Usuario"
                width="150"
                height="150"
              />
            </label>
            <input
              type="file"
              className="form-control mt-3"
              id="avatarUploader"
            />
          </div>
        </div> */}

        <div className="data mb-5 px-5">
          <div className="mb-4 row">
            <div className="col">
              <label>Tipo de documento :</label>
              <select
                id="tDocInput"
                className="form-select"
                placeholder="Tipo de Documento"
                value={tDoc}
                onChange={(e) => {
                  setTdoc(e.target.value);
                }}
                required
              >
                {/* <option selected disabled value="">Seleccione</option> */}
                <option value="CC">Cédula de Ciudadanía</option>
                <option value="CE">Cédula de Extranjería</option>
                <option value="TI">Tarjeta de Identidad</option>
              </select>
            </div>
            <div className="col">
              <label>Número de documento de identificación :</label>
              <input
                id="nDocInput"
                type="number"
                className="form-control"
                min="0"
                placeholder="&#xf47f;"
                value={numDoc}
                onChange={(e) => {
                  setNumDoc(e.target.value);
                }}
                required
              />
            </div>
          </div>

          <div className="mb-4 row ">
            <div className="col">
              <label>Nombres :</label>
              <input
                id="namedInput"
                type="text"
                className="form-control"
                placeholder="&#xf406;"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div className="col">
              <label>Apellidos :</label>
              <input
                id="lastnamedInput"
                type="text"
                className="form-control"
                placeholder="&#xf406;"
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
                required
              />
            </div>
          </div>

          <div className="mb-4 row ">
            <div className="col">
              <label>Email :</label>
              <input
                id="emailInput"
                type="email"
                className="form-control"
                placeholder="&#xf1fa;"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="col">
              <label>Teléfono :</label>
              <input
                id="phoneInput"
                type="tel"
                className="form-control"
                placeholder="&#xf879;"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                required
              />
            </div>
          </div>

          {usuario.role === "admin" && (
            <div className="mb-4 row ">
              <div className="col">
                <label>Rol :</label>
                <select
                  id="rolInput"
                  className="form-select"
                  placeholder="Rol"
                  value={role}
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  required
                >
                  <option selected disabled value="">
                    Seleccione
                  </option>
                  <option value="admin">Administrador</option>
                  <option value="ext">Usuario Externo - Cliente</option>
                  <option value="int">Usuario Interno - Empleado</option>
                </select>
              </div>
              <div className="col">
                <label>Estado :</label>
                <select
                  id="stateInput"
                  className="form-select"
                  placeholder="Estado"
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                  required
                >
                  <option selected disabled value="">
                    Seleccione
                  </option>
                  <option value={true}>Habilitado</option>
                  <option value={false}>Inhabilitado</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="mb-4 row px-5 justify-content-center">
          <Link
            type="button"
            to="/gestion-usuarios"
            className="btn px-4 btn-gulf"
          >
            Cancelar
          </Link>
          <input type="submit" className="btn px-4 btn-gulf" value="Guardar" />
        </div>
      </form>
    </div>
  );
}
