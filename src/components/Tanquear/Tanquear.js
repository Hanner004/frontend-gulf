import { useState } from 'react';
import './Tanquear.css';
import { TanquearBase } from './TanquearBase';

// DATOS DE PRUEBA
const vehiculosLista = [{id: 1, vehiculo: 'Vehiculo 1 - AAA123'}, {id: 2, vehiculo:'Vehiculo 2 - BBB123'}, {id: 3, vehiculo:'Vehiculo 3 - CCC123'}];
const user = 'ext';

export function Tanquear() {
    const [usuario, setUsuario] = useState(user)
    const [vehiculos, setVehiculos] = useState(vehiculosLista);
    return (
        <TanquearBase usuario={usuario} vehiculos={vehiculos} />
    );
}