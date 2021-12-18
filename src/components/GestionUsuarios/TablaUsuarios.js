import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import {
  faEye,
  faEyeSlash,
  faUserMinus,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

export default function TablaUsuarios(props) {

  const usuario = props.usuario;
  function role(props) {
    switch (props) {
      case "admin":
        return "Administrador";
      case "ext":
        return "Externo";
      case "int":
        return "Interno";
      default:
        return "Error";
    }
  }

  function deleteUser(id, name) {
    Swal.fire({
      title: 'Eliminar usuario',
      text: `¿Desea eliminar el usuario ${name}?`,
      icon: 'question',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#20515C',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("http://localhost:4000/api/users/" + id,{
        method: 'DELETE',
        headers: {'Authorization': 'Bearer '+props.token},
        })
        .then((response) => response.json())
        .then((data) => {document.location.reload(false)})
        .catch((err)=>{console.log(err)});
      }
    })
  }

  function changeStatus(id, statusUser) {
    fetch("http://localhost:4000/api/users/"+id+"/status",{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer '+props.token
      },
      body:JSON.stringify({status: !statusUser}),
      })
      .then((response) => response.json())
      .then((data) => {document.location.reload(false)})
      .catch((err)=>{console.log(err) });
  }

  return (
    <tr key={usuario._id} className="user-data">
      <td>
        <strong>{props.num}</strong>
      </td>
      <td>
        <strong>{usuario.name}</strong>
      </td>
      <td>
        <strong>{usuario.numDoc}</strong>
      </td>
      <td>
        <strong>{usuario.email}</strong>
      </td>
      <td>
        <strong>{usuario.phone}</strong>
      </td>
      <td>
        <strong>{role(usuario.role)}</strong>
      </td>
      <td>
        <strong>
          {
            usuario.role!="ext" ?
              <FontAwesomeIcon icon={faEye}/>
            :
            usuario.status === true ? (
              <FontAwesomeIcon 
                icon={faEye} 
                type="button" 
                title="Deshabilitar"
                onClick={()=>changeStatus(usuario._id, usuario.status)}
              />
            ) : (
              <FontAwesomeIcon 
                icon={faEyeSlash} 
                type="button" 
                title="Habilitar"
                onClick={()=>changeStatus(usuario._id, usuario.status)}
              />
            )
          }
        </strong>
      </td>
      <td>
        <div className="container">
          <Link className="editar-btn" to={`/editUser/${usuario._id}`}>
            <FontAwesomeIcon icon={faEdit} />
          </Link>
          <button
            className="btn eliminar-btn"
            onClick={() => {deleteUser(usuario._id, usuario.name)}}
          >
            <FontAwesomeIcon icon={faUserMinus} />
          </button>
        </div>
      </td>
    </tr>
  );
}
