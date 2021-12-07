import React, { Component } from "react";

export default class GasolinePrices extends Component {
  render() {
    return (
      <div className="row text-center card">
        <h5 className="card-header bg-white text-start">Gasolinas</h5>
        <div className="card-body border">
          <div className="row card-header rounded m-1">
            <div className="col">Corriente (Activa)</div>
            <div className="col">$8.350 ($/gal)</div>
          </div>
          <div className="row card-header rounded m-1">
            <div className="col">Extra (Activa)</div>
            <div className="col">$8.350 ($/gal)</div>
          </div>
        </div>
      </div>
    );
  }
}
