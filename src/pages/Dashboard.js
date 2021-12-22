import React, { useEffect, useState } from "react";
import axios from "axios";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";

function Dashboard() {
  useEffect(() => (document.title = "Inicio"));

  const [session] = useState(JSON.parse(localStorage.getItem("session")));
  const [user, setUser] = useState({});
  const [prices, setPrices] = useState([]);
  const token = session.token;

  const getUser = async () => {
    let URL = `http://localhost:4000/api/users/${session.data._id}`;
    let config = {
      headers: {
        authorization: "Bearer " + token,
      },
    };
    await axios
      .get(URL, config)
      .then((response) => {
        console.log({
          user: response.data.data,
        });
        setUser(response.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const getPrices = async () => {
    let URL = `http://localhost:4000/api/price`;
    let myHeaders = {
      headers: {
        authorization: "Bearer " + token,
      },
    }
    await axios.get(URL, myHeaders)
      .then(res => {
        setPrices(res.data.data)
      })
  }

  // Cargar usuarios
  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  // Cargar Precios
  useEffect(() => getPrices(), [])

  return (
    <div className="App">
      <Navbar user={user} session={session}/>
      <Main user={user} session={session} prices={prices}/>
    </div>
  );
}

export default Dashboard;
