import './Tanquear.css';

export function TanquearExterno(props) {
    const vehiculos = props.vehiculos;
    console.log(vehiculos)
    return (
        <>
            <div className="id-usuario-tanquear input-tanquear">
                <label>
                    Vehículo:
                </label>
                <select>
                {vehiculos.map( vehiculo => <option value={vehiculo.id}>{vehiculo.vehiculo}</option>)}
                </select>

            </div>
            <div className="row">
                <div className="col-5 tipo-gasolina-tanquear input-tanquear">
                    <label>
                        Tipo de gasolina:
                    </label>
                    <br />
                    <select>
                        <option value="extra">Gasolina extra</option>
                        <option value="corriente">Gasolina corriente</option>
                    </select>
                </div>
                <div className="col-5 cant-gasolina-tanquear input-tanquear">
                    <label>
                        Cantidad de gasolina:
                    </label>
                    <input />
                </div>
            </div>
            
            <div className="metodo-pago-tanquear input-tanquear">
                <label>
                    Método de pago:
                </label>
                <br />
                <select>
                    <option value="redimir">Redimir puntos</option>
                    <option value="efectivo">Efectivo</option>
                    <option value="transferencia">Transferencia bancaria</option>
                    <option value="debito">Tarjeta Dédito</option>
                    <option value="credito">Tarjeta de crédito</option>
                </select>
            </div>
        </>
    );
}