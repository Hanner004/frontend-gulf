import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GasolinePrices(props) {
  const { user, session } = props;

  const [gasolines, setGasolines] = useState([]);

  const getGasolines = async () => {
    let URL = `http://localhost:4000/api/gasoline`;
    let data = {};
    let config = {
      headers: {
        authorization: "Bearer " + session.token,
      },
    };
    await axios
      .get(URL, config)
      .then((response) => {
        console.log({
          user: response.data.data,
        });
        setGasolines(response.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getGasolines();
    // eslint-disable-next-line
  }, []);

  function formatDec(dat) {
    return dat.toLocaleString("es-co", { style: "currency", currency: "COP" });
  }

  return (
    <div className="row gasoline-user">
      <div className="card-user">
        <h5 className="card-header title-gas-user py-3">Gasolinas</h5>
        <div className="card-body">
          {gasolines.map((gas) => {
            return (
              <div key={gas._id} className="row item-gas-user">
                <div className="col">
                  {gas.type}
                  <br />
                  <p>{gas.status}</p>
                </div>
                <div className="col">
                  {formatDec(gas.price)}
                  <br />
                  <p>($/gal)</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
