import React, { Component } from "react";
import { GestionUsuarios } from "../GestionUsuarios/GestionUsuarios";
import './Main.css';

export default class Main extends Component {
  render() {
    return (
      <div className="container-fluid main">
        
        <GestionUsuarios />
        {/* <div className="container">
          <div className="row">
            <div className="col">Hola nombre user,</div>
          </div>
          <div className="row">
            <div className="col">
              Lorem ipsum dolor sit amet, consectetur adipiscing.
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}
