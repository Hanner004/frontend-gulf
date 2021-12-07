import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

export default class Points extends Component {
  render() {
    return (
      <div className="row text-center bg-white">
        <div className="card-header bg-white">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="card-body text-center pt-5 pb-5 border">
          <div className="row">
            <p>Puntos acumulados</p>
          </div>
          <div className="row">
            <p>100</p>
          </div>
        </div>
      </div>
    );
  }
}
