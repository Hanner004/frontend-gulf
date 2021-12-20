import React, { useEffect, useState } from "react";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import List from "../data/data.json";

function Dashboard() {
  useEffect(() => (document.title = "Inicio"));

  const [session] = useState(JSON.parse(localStorage.getItem("session")));
  const token = session.token;
  let user_data = [];
  fetch(`api/users/${session.data._id}`, {
    method: 'GET',
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }, 
    token: "Bearer " + token
  })
  .then(res => res.json())
  .then(res => console.log('aqui', res))
  .catch(err => console.log(err))
  //console.log('aqui', user_data)
  //console.log('-->',session.data)

  const [user, setUser] = useState(List.user);
  //console.log(session)
  return (
    <div className="App">
      <Navbar user={user} />
      <Main user={user} session={session} />
    </div>
  );
}

export default Dashboard;
