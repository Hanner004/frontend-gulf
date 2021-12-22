import React, { Component } from "react";
import list from "../../data/data.json"

export default class GasolinePrices extends Component {
  render() {
    return (
      <div className="row gasoline-user">
        <div className="card-user">
          <h5 className="card-header title-gas-user py-3">Gasolinas</h5>
          <div className="card-body">
            {
              list.gasolines.length &&
              list.gasolines.map((gas)=>{
                return(
                  <div key={gas._id} className="row item-gas-user">
                    <div className="col">
                      {gas.tipe}<br /><p>{gas.state}</p> 
                    </div>
                    <div className="col">
                      ${gas.price}<br /><p>($/gal)</p> 
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
