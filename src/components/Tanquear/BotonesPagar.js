import './Tanquear.css';

export const BotonesPagar = () => {
    return(
        <div className="btns">
            <button className="btn-cancelar" onClick={() => alert('Operación cancelada')}>Cancelar</button>
            <button className="btn-pagar" onClick={() => alert('Pago realizado')}><trong>Pagar</trong></button>
        </div>
    );
}