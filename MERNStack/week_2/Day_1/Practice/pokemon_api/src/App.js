import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState({});
  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/") // promise
    .then((serverResponse) => serverResponse.json())
    .then((jsonResponse) => setPokemons(jsonResponse)) // successfull
    .catch((error) => console.log("Something went wrong", error)); // errors
    console.log(pokemons)
};

  return (
    <div className="App">
    <button onClick={fetchPokemons}>Fetch Pokemons</button>
      <h1>-Pokemons-</h1>
      <ul>
      {pokemons.results.map((onePokemon) => {
        return (
          
            <li>{onePokemon.name}</li>
         
            );
          })}</ul>
          </div>
        );
      }

export default App;
