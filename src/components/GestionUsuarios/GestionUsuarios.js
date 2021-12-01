import React from "react";
import { Table} from "react-bootstrap";
import './GestionUsuarios.css';
import TablaUsuarios from "./TablaUsuarios";

export function GestionUsuarios(){
    // DATOS PARA PRUEBA
    const usuarios = [
        {id: 1, nombre: "Fabian", identificacion: 1122334455, email: "correo@correo.com", telefono: 1234567, rol: "Externo", estado: "I"},
        {id: 2, nombre: "Hanner", identificacion: 1122334455, email: "correo@correo.com", telefono: 1234567, rol: "Interno", estado: "A"},
        {id: 3, nombre: "Veranis", identificacion: 1122334455, email: "correo@correo.com", telefono: 1234567, rol: "Administrador", estado: "A"},
        {id: 4, nombre: "Marlon", identificacion: 1122334455, email: "correo@correo.com", telefono: 1234567, rol: "Interno", estado: "I"},
        {id: 5, nombre: "Luis", identificacion: 1122334455, email: "correo@correo.com", telefono: 1234567, rol: "Externo", estado: "A"},
        {id: 6, nombre: "Fabian", identificacion: 1122334455, email: "correo@correo.com", telefono: 1234567, rol: "Externo", estado: "I"},
        {id: 7, nombre: "Hanner", identificacion: 1122334455, email: "correo@correo.com", telefono: 1234567, rol: "Administrador", estado: "A"},
        {id: 8, nombre: "Veranis", identificacion: 1122334455, email: "correo@correo.com", telefono: 1234567, rol: "Interno", estado: "A"},
        {id: 9, nombre: "Marlon", identificacion: 1122334455, email: "correo@correo.com", telefono: 1234567, rol: "Interno", estado: "A"},
        {id: 10, nombre: "Luis", identificacion: 1122334455, email: "correo@correo.com", telefono: 1234567, rol: "Externo", estado: "A"},
    ];
    
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
                        {usuarios.map( usuario => <TablaUsuarios key={usuario.id} usuario={usuario} />)}
                    </tbody>
                </Table>
            </section>
            <section className="add-btn">
                <button type="submit" className='add-user-btn'>Agregar usuario</button>
            </section> 
        </div>
    );
}