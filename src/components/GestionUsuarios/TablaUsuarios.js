import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faUserMinus, faEdit} from "@fortawesome/free-solid-svg-icons";

export default function TablaUsuarios(props) {
    const usuario = props.usuario;
    return (
        <tr key={usuario.id} className="user-data">
            <td><strong>{usuario.id}</strong></td>
            <td><strong>{usuario.nombre}</strong></td>
            <td><strong>{usuario.identificacion}</strong></td>
            <td><strong>{usuario.email}</strong></td>
            <td><strong>{usuario.telefono}</strong></td>
            <td><strong>{usuario.rol}</strong></td>
            <td><strong>{usuario.estado === "A" ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}</strong></td>
            <td>
                <FontAwesomeIcon icon={faEdit} />{' '}
                <FontAwesomeIcon icon={faUserMinus} />  
            </td>
        </tr>
    );
}