import './App.css';
import { useState } from "react";
import axios from 'axios';
//import axios from "axios";
function App() {
  // States
  const [users, setUsers] = useState([]) // empty array
  const [user, setUser] = useState()
  const [successMsg, setSuccessMsg] = useState()
  const [errorMsg, setErrorMsg] = useState()

  // Get 10 users from a API
  const getUsers = ()=>{
    // fetch('/api/userAll')
    // .then(response => response.json())
    // .then(users => console.log(users))
    axios.get('/api/userAll')
    .then(users => {
      console.log(users.data)
      setUsers(users.data)
    })
  }

  // Get user by id
  const getUserById = (id)=>{
    console.log(id)
    axios.get('/api/userById/'+ id)
    .then(user=> {
      console.log(user.data)
      if(user.data.user) {
        setUser(user.data.user)
        setSuccessMsg(user.data.message)
      }
      else{
        setErrorMsg(user.data.message)
      }
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        
        {
          user && <h2>{successMsg} UserID: {user.id}</h2>
        }

        {
          errorMsg && <h2>{errorMsg}</h2>
        }

        <button type="submit" onClick={getUsers}>GET USERS</button>
        <ul>
          {users.map((user, index)=>{
          return <li key={index}>
            <a href="#" onClick={()=> getUserById(user.id)}>ID: {user.id}</a> , 
            User Name: {user.username}, 
            Email: {user.email}
            </li>
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
