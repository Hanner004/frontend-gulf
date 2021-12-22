import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

export default class Points extends Component {
  render() {
    return (
      <div className="row points-user h-100">
        <div className="card-user points-body p-5">
          <div>
            <FontAwesomeIcon icon={faStar} style={{ fontSize: "60px" }} />
            <p>Puntos acumulados</p>
            <h2 className="fw-bolder">100</h2>
          </div>
        </div>
      </div>
    );
  }
}
