import React, { useState } from "react";
import { Table} from "react-bootstrap";
import { Link } from "react-router-dom";
import './GestionUsuarios.css';
import TablaUsuarios from "./TablaUsuarios";

// DATOS PARA PRUEBA
const usuarios = [
    {id: 1, nombre: "Fabian", identificacion: 1122334455, email: "correo@correo.com", telefono: 1234567, rol: "Externo", estado: "I"},
    {id: 2, nombre: "Hanner", identificacion: 1122334455, email: "correo@correo.com", telefono: 1234567, rol: "Interno", estado: "A"},
    {id: 3, nombre: "Veranis", identificacion: 1122334455, email: "correo@correo.com", telefono: 1234567, rol: "Administrador", estado: "A"},
    {id: 4, nombre: "Marlon", identificacion: 1122334455, email: "correo@correo.com", telefono: 1234567, rol: "Interno", estado: "I"},
    {id: 5, nombre: "Luis", identificacion: 1122334455, email: "correo@correo.com", telefono: 1234567, rol: "Externo", estado: "A"}
];

export function GestionUsuarios(){
    const [data, setData] = useState(usuarios);
    return(
        <div className="gestion">
            <section className="encabezado">
                <h1>Gestión de usuarios</h1>
                <h6>Usuarios externos, internos y administradores</h6>
            </section>
            
            <section className="tabla">
                <Table responsive className='tabla-usuarios'>
                    <thead>
                        <tr className="encabezado-tabla">
                            <th scope="col"><strong>#</strong></th>
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
                        {data.map( usuario => <TablaUsuarios key={usuario.id} usuario={usuario} />)}
                    </tbody>
                </Table>
            </section>
            <section className="add-btn">
                <Link to={"agregar"}><button type="submit" className='add-user-btn'>Agregar usuario</button></Link>
            </section> 
        </div>
    );
}