import { Tanquear } from "../components/Tanquear/Tanquear";
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";
export function TanquearVehiculo() {
  useEffect(()=>document.title="Tanquear vehículo");
  return (
    <div>
      <Navbar />
      <Tanquear />
    </div>
  );
}
