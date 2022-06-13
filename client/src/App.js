import './App.css';
import { useState } from "react";
import axios from 'axios';
function App() {
  // States
  const [userInput, setUserInput] = useState()
  const [movie, setMovie] = useState()

  // Handlers
  const getData = (event)=>{
    //console.log(event.target.value)
    setUserInput(event.target.value)
  }
  const searchMovie = ()=>{
    axios.get("/movie/title/"+userInput)
    .then(response => {
      console.log(response.data)
      setMovie(response.data)
    })
  }
  
  return (
    <div className="App">
      <header className="App-header">
        OMDB Movie Site
        <input type="text" onChange={getData}/>
        <button type="submit" onClick={searchMovie}>Search</button>
        {
          movie&&
        <>
        <h2>Movie Title: {movie.Title}</h2>
        <h3>Plot: {movie.Plot}</h3>
        <img src={movie.Poster} />
        </>
        }
      </header>
    </div>
  );
}

export default App;
