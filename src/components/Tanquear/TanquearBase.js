import './Tanquear.css';
import { TanquearAdmin } from './TanquearAdmin';
import { TanquearExterno } from './TanquearExterno';

export function TanquearBase(props) {
    if(props.usuario === 'admin'|| props.usuario === 'int'){
        return (
            <div className="container">
                <div className="card-tanquear">
                    <div className="titulo-tanquear">
                        <h3>Tanquear vehículo</h3>
                    </div>
                    <hr />
                    <TanquearAdmin />
                    <hr />
                    <div className="btns">
                        <button className="btn-cancelar" onClick={() => alert('Operación cancelada')}>Cancelar</button>
                        <button className="btn-pagar" onClick={() => alert('Pago realizado')}><trong>Pagar</trong></button>
                    </div>
    
                </div>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="card-tanquear">
                <div className="titulo-tanquear">
                    <h3>Tanquear vehículo</h3>
                </div>
                <hr />
                    <TanquearExterno vehiculos={props.vehiculos}/>
                <hr />
                <div className="btns">
                    <button className="btn-cancelar" onClick={() => alert('Operación cancelada')}>Cancelar</button>
                    <button className="btn-pagar" onClick={() => alert('Pago realizado')}><trong>Pagar</trong></button>
                </div>

            </div>
        </div>
    )
}