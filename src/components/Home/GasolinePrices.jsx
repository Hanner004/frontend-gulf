import React, { Component } from "react";
import list from "../../data/data.json"

export default class GasolinePrices extends Component {
  constructor(){
    super();
    this.state = {
      listGasoline : {}
    }
  }

  componentDidMount() {
    const { session } = this.props;
    fetch("http://localhost:4000/api/gasoline",{
      method: 'GET',
      headers: {'Authorization': 'Bearer '+ session.token},
    })
      .then((response) => response.json())
      .then((response) => {this.setState({listGasoline : response.data})})
      .catch((err)=>{console.log(err)});
  }

  render() { 
    const datos = this.state.listGasoline
    return (
      <div className="row gasoline-user">
        <div className="card-user">
          <h5 className="card-header title-gas-user py-3">Gasolinas</h5>
          <div className="card-body">
            {
              datos.length &&
              datos.map((gas)=>{
                return(
                  <div key={gas._id} className="row item-gas-user">
                    <div className="col">
                      {gas.type}<br /><p>{gas.status}</p> 
                    </div>
                    <div className="col">
                      {gas.price.toLocaleString('es-co', { style: 'currency', currency: 'COP' })}<br /><p>($/gal)</p> 
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
