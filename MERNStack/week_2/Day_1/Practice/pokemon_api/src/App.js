import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const fetchPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/") // promise
    .then((serverResponse) => serverResponse.json())
    .then((jsonResponse) => setPokemons(jsonResponse.results)) // successfull
    .catch((error) => console.log("Something went wrong", error)); // errors
    console.log(pokemons)
};

  return (
    <div className="App">
      <button onClick={fetchPokemons} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
      Fetch Pokemons
</button>
   <hr/>

      <ul>
      {pokemons && pokemons.map((onePokemon) => {
        return (
          
            <li>{onePokemon.name}</li>
         
            );
          })}</ul>
          </div>
        );
      }

export default App;
