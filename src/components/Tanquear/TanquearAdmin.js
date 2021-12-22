import './Tanquear.css';

export function TanquearAdmin() {
    return (
        <>
            <div className="id-usuario-tanquear input-tanquear">
                <label>
                    Identificación de usuario:
                </label>
                <input />
            </div>
            <div className="tipo-gasolina-tanquear input-tanquear">
                <label>
                    Tipo de gasolina:
                </label>
                <br />
                <select>
                    <option value="extra">Gasolina extra</option>
                    <option value="corriente">Gasolina corriente</option>
                </select>
            </div>
            <div className="cant-gasolina-tanquear input-tanquear">
                <label>
                    Cantidad de gasolina:
                </label>
                <input />
            </div>
        </>
    );
}