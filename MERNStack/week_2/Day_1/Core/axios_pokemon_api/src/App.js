import { useState } from 'react';
import './App.css';
import axios from "axios";
function App() {
  const [pokemons, setPokemons] = useState([]);

const axiosPokemons = () => {
  axios
    .get("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => {
      setPokemons(response.data.results);
      console.log(response);
    })
    .catch((error) => console.log(error));
};

  return (
    <div className="App">
    <button onClick={axiosPokemons} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
    Fetch Pokemons
</button>
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
