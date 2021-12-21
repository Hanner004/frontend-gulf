// import "./Tanquear.css";

// export function TanquearExterno(props) {
//   const { vehicles } = props;
//   return (
//     <>
//       <div className="id-usuario-tanquear input-tanquear">
//         <label>Vehículo:</label>
//         <select>
//           {vehicles.map((vehicle) => (
//             <option key={vehicle._id} value={vehicle._id} onChange={(e) => {
//               setIdV(e.target.value);
//             }}>
//               {vehicle.model} - {vehicle.placa}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="row">
//         <div className="col-6 tipo-gasolina-tanquear input-tanquear">
//           <label>Tipo de gasolina:</label>
//           <br />
//           <select
//             onChange={(e) => {
//               setTG(e.target.value);
//             }}
//           >
//             <option value="Extra">Gasolina extra</option>
//             <option value="Corriente">Gasolina corriente</option>
//           </select>
//         </div>
//         <div className="col-6 cant-gasolina-tanquear input-tanquear">
//           <label>Cantidad de gasolina:</label>
//           <input
//             type="number"
//             min="0"
//             placeholder="0"
//             onChange={(e) => {
//               setG(e.target.value);
//             }}
//           />
//         </div>
//       </div>

//       <div className="metodo-pago-tanquear input-tanquear">
//         <label>Método de pago:</label>
//         <br />
//         <select>
//           <option value="redimir">Saldo disponible</option>
//           {/* <option value="efectivo">Efectivo</option>
//           <option value="transferencia">Transferencia bancaria</option>
//           <option value="debito">Tarjeta Dédito</option>
//           <option value="credito">Tarjeta de crédito</option> */}
//         </select>
//       </div>
//     </>
//   );
// }
