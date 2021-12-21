import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

export default class Money extends Component {

  formatDec(dat){
    return dat.toLocaleString('es-co', { style: 'currency', currency: 'COP' })
  }

  render() {
    return (
      <div className="row money-user h-100">
        <div className="card-user money-body">
          <div>
            <FontAwesomeIcon icon={faDollarSign} style={{fontSize:'60px'}}/>
            <p>Saldo disponible</p>
            <h2 className="fw-bolder">{this.formatDec(this.props.user.wallet.money)}</h2>
          </div>
        </div>
      </div>
    );
  }
}
