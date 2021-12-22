import { BotonesPagar } from './BotonesPagar';
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
                    <BotonesPagar />
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
                <BotonesPagar />
            </div>
        </div>
    )
}