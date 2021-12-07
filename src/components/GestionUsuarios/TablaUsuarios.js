import { BrowserRouter as Router, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faUserMinus,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

export default function TablaUsuarios(props) {
  const usuario = props.usuario;
  return (
    <tr key={usuario.id} className="user-data">
      <td>
        <strong>{usuario.id}</strong>
      </td>
      <td>
        <strong>{usuario.nombre}</strong>
      </td>
      <td>
        <strong>{usuario.identificacion}</strong>
      </td>
      <td>
        <strong>{usuario.email}</strong>
      </td>
      <td>
        <strong>{usuario.telefono}</strong>
      </td>
      <td>
        <strong>{usuario.rol}</strong>
      </td>
      <td>
        <strong>
          {usuario.estado === "A" ? (
            <FontAwesomeIcon icon={faEye} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} />
          )}
        </strong>
      </td>
      <td>
        <div className="container">
          <Link className="editar-btn" to={"/gestion-usuarios/editar"}>
            <FontAwesomeIcon icon={faEdit} />
          </Link>{" "}
          <button
            className="btn eliminar-btn"
            onClick={() => alert("Registro Eliminado")}
          >
            <FontAwesomeIcon icon={faUserMinus} />
          </button>
        </div>
      </td>
    </tr>
  );
}
