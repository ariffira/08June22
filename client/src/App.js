import './App.css';
import { useState } from "react";
import axios from 'axios';
//import axios from "axios";
function App() {
  // States
  const [successMsg, setSuccessMsg] = useState('Click Below!') 
  // send something to backend when you click
  const sendToServer = ()=>{
    // Call Backend api using Axios Get
    //axios.get('/api/test').then().catch()
    fetch('/api/test')
    .then(response=> response.json())// get only json data
    .then(data=> setSuccessMsg(data))
    .catch(error => console.log(error));
  }
 
  // Get 10 users from a API
  const getUsers = ()=>{
    // fetch('/api/userAll')
    // .then(response => response.json())
    // .then(users => console.log(users))
    axios.get('/api/userAll')
    .then(users => console.log(users.data))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>{successMsg}</h3>
        <button type="submit" onClick={sendToServer}>Say Hello to Backend</button>
        <button type="submit" onClick={getUsers}>Show Users</button>
      </header>
    </div>
  );
}

export default App;
