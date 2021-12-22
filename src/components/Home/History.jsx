import React, { Component } from "react";

export default class History extends Component {
  formatDate(date) {
    var res = new Date(date);
    return res.toLocaleString();
  }

  formatDec(dat) {
    return dat.toLocaleString("es-co", { style: "currency", currency: "COP" });
  }

  render() {
    const { user } = this.props;
    return (
      <div className="row history-user">
        <div className="card-user">
          <h5 className="card-header title-his-user py-3">Historial</h5>
          <div className="table-history">
            <div className="row table-history-header">
              <div className="col-5">Acción</div>
              <div className="col-4">Fecha</div>
              <div className="col-3">Valor</div>
            </div>
            <div className="table-history-body">
              {user.wallet.history &&
                user.wallet.history.map((his, i) => {
                  return (
                    <div key={i} className="row py-3">
                      <div className="col-5">{his.action}</div>
                      <div className="col-4">{this.formatDate(his.date)}</div>
                      <div className="col-3">{this.formatDec(his.value)}</div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
