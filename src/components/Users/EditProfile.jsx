import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import bcrypt from 'bcryptjs';
import "./User.css"

export default function EditProfile({session}){

  const idUser = session.data._id;
  const [user, setUser] = useState([])
  const [tDoc, setTdoc] = useState("");
  const [numDoc, setNumDoc] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  let history = useNavigate();

  function getUser() {
    fetch("http://localhost:4000/api/users/"+idUser,{
      method: 'GET',
      headers: {'Authorization': 'Bearer '+session.token},
      })
      .then((response) => response.json())
      .then((data) => {
        setUser(data.data)
        setTdoc(data.data.tDoc)
        setNumDoc(data.data.numDoc)
        setName(data.data.name)
        setLastname(data.data.lastname)
        setEmail(data.data.email)
        setPhone(data.data.phone)
      })
      .catch((err)=>{console.log(err)});
  }
  
  useEffect(()=>{
    getUser();
  },[]);

  function fetchData(datos) {
    fetch("http://localhost:4000/api/users/" + idUser,{
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
          if (data.errors[0].msg==="El usuario se encuentra registrado")
            Swal.fire({
              icon: 'error',
              text: data.errors[0].msg,
              confirmButtonColor: '#20515C'
            })
        }
        else{
          Swal.fire({
            icon: 'success',
            text: 'Datos actualizados',
            confirmButtonColor: '#20515C'
          })
          history('/Profile')}
      })
      .catch((err)=>{console.log(err)});
  }

  function fetchPass() {
    fetch("http://localhost:4000/api/users/"+idUser+"/updatePass",{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer '+session.token
      },
      body:JSON.stringify({password:newPassword}),
      })
      .then((response) => {return response.json()})
      .then((data) => {
        Swal.fire({
          icon: 'success',
          text: 'Datos actualizados',
          confirmButtonColor: '#20515C'
        })
        history('/Profile')
      })
      .catch((err)=>{console.log(err)});
  }

  const updateProfile = (e) => {
    e.preventDefault();
    let datos = {
      tDoc: tDoc,
      numDoc: numDoc,
      name: name,
      lastname: lastname,
      email: email,
      phone: phone,
    };
    if (password.length === 0) {
      fetchData(datos)
    } else {
      if (bcrypt.compareSync(password, user.password)){
        if (newPassword.length != 0) {
          if (newPassword == confirmation) {
            fetchData(datos)
            fetchPass()
          }else{
            Swal.fire({
              icon: 'error',
              text: 'La confirmaci??n de contrase??a no coincide',
              confirmButtonColor: '#20515C'
            })
          }
        }else{
          Swal.fire({
            icon: 'warning',
            text: 'Contrase??a nueva requerida',
            confirmButtonColor: '#20515C'
          })
        }
      }else{
        Swal.fire({
          icon: 'error',
          text: 'Contrase??a actual incorrecta',
          confirmButtonColor: '#20515C'
        })
      }
    }
  }

  return (
    <div className="container-fluid p-5 main-User">
      <div className="row px-4">
        <h1 style={{ color: "#4A5759" }}>
          <b>Editar perfil</b>
        </h1>
        <p>Datos b??sicos</p>
      </div>

      <form className="form pt-5 px-4" onSubmit={updateProfile}>
        {/* <div className="mb-5 row photo-user">
          <div className="col-6">
            <label htmlFor="avatarUploader">
              <img
                id="avatarImg"
                className="img-thumbnail mx-auto"
                src="./img/img1.jpg"
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
          <label className="mb-4 fs-3">Editar datos personales :</label>
          <div className="mb-4 row">
            <div className="col">
              <label>Tipo de documento :</label>
              <select
                id="tDocInput"
                className="form-select"
                placeholder="Tipo de Documento"
                value={tDoc}
                onChange={(e)=>setTdoc(e.target.value)}
                required
              >
                <option value="CC">C??dula de Ciudadan??a</option>
                <option value="CE">C??dula de Extranjer??a</option>
                <option value="TI">Tarjeta de Identidad</option>
              </select>
            </div>
            <div className="col">
              <label>
                N??mero de documento de identificaci??n :
              </label>
              <input
                id="nDocInput"
                type="number"
                className="form-control"
                min="0"
                placeholder="&#xf47f;"
                value={numDoc}
                onChange={(e)=>setNumDoc(e.target.value)}
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
                onChange={(e)=>setName(e.target.value)}
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
                onChange={(e)=>setLastname(e.target.value)}
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
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
            </div>
            <div className="col">
              <label>Tel??fono :</label>
              <input
                id="phoneInput"
                type="tel"
                className="form-control"
                placeholder="&#xf879;"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                required
              />
            </div>
          </div>

          <label className="mt-5 mb-4 fs-3">Editar contrase??a :</label>
          <div className="mb-4 row ">
            <div className="col">
              <label>Contrase??a actual :</label>
              <input
                id="passwordInput"
                type="password"
                className="form-control"
                placeholder="&#xf023;"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className="col">
              <label>Contrase??a nueva:</label>
              <input
                id="newPassInput"
                type="password"
                minlength="5"
                className="form-control"
                placeholder="&#xf023;"
                onChange={(e)=>setNewPassword(e.target.value)}
              />
            </div>
            <div className="col">
              <label>Confirmaci??n de contrase??a:</label>
              <input
                id="confPassInput"
                type="password"
                className="form-control"
                placeholder="&#xf023;"
                onChange={(e)=>setConfirmation(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="mb-4 row py-4 px-5 justify-content-center">
          <Link
            type="button"
            to="/Profile"
            className="btn px-4 btn-gulf">
            Cancelar
          </Link>
          <input
            type="submit"
            className="btn px-4 btn-gulf"
            value="Guardar"
          />
        </div>
      </form>
    </div>
  );
}