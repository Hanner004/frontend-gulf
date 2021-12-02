import React, { Component } from "react";
import "./modal.css"

export default function Modal({id, title, textbtn, body}) {
  return (
    <div className="modal fade" id={id}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">{body}</div>
          <div className="modal-footer">
            <button type="button" className="btn secondary btn-sm px-4" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" className="btn primary btn-sm px-4">{textbtn}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

