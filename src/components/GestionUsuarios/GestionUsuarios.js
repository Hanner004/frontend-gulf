import React from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import './GestionUsuarios.css';

export function GestionUsuarios(){
    const usuarios = [
        {id: 1, nombre: "Fabian", identificacion: 1122334455, email: "correo@correo.com", telefono: 1234567, rol: "Externo", estado: "I"},
        {id: 2, nombre: "Hanner", identificacion: 1122334455, email: "correo@correo.com", telefono: 1234567, rol: "Interno", estado: "A"},
        {id: 3, nombre: "Veranis", identificacion: 1122334455, email: "correo@correo.com", telefono: 1234567, rol: "Administrador", estado: "A"},
        {id: 4, nombre: "Marlon", identificacion: 1122334455, email: "correo@correo.com", telefono: 1234567, rol: "Interno", estado: "I"},
        {id: 5, nombre: "Luis", identificacion: 1122334455, email: "correo@correo.com", telefono: 1234567, rol: "Externo", estado: "A"},
    ];
    
    return(
        <>
            <section className="encabezado">
                <h1>Gestión de usuarios</h1>
                <h6>Usuarios externos, internos y administradores</h6>
            </section>
            
            <section className="tabla-usuarios">
                <Table responsive>
                    <thead className="encabezado-tabla">
                        <tr>
                            <th scope="col"><strong>#</strong></th>
                            <th>Nombre</th>
                            <th>Identificación</th>
                            <th>Email</th>
                            <th>Teléfono</th>
                            <th>Rol</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario => {
                            return (
                                <tr className="user-data">
                                    <td><strong>{usuario.id}</strong></td>
                                    <td><strong>{usuario.nombre}</strong></td>
                                    <td><strong>{usuario.identificacion}</strong></td>
                                    <td><strong>{usuario.email}</strong></td>
                                    <td><strong>{usuario.telefono}</strong></td>
                                    <td><strong>{usuario.rol}</strong></td>
                                    <td><strong>{usuario.estado === "A" ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}</strong></td>
                                </tr>
                            );

                        }))}
                    </tbody>
                </Table>
            </section>
            
        </>
    );
}