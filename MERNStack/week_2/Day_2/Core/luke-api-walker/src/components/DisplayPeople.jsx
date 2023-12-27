import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const baseURL = "https://swapi.dev/api/";


  const DisplayPeople = () => {
  const [chosenPeople, setChosenPeople] = useState({});
  console.log(useParams());
  
  const { selected, Id } = useParams();
  const nav = useNavigate();
  useEffect(() => {
    let apiUrl = `${baseURL}/${selected}/${Id}`;
    axios
      .get(apiUrl)
      .then((response) => setChosenPeople(response.data))
      .catch((error) => nav("/error"));
  }, [Id, selected]);
  return (
    <div className="flex flex-col gap-10 justify-start">
      {chosenPeople &&  <> {selected === "people"?
        <>
          <h1>{chosenPeople.name}</h1>
          <h4>Height :{chosenPeople.height}</h4>
          <h4>{chosenPeople.mass}</h4>
          <h4>{chosenPeople.hair_color}</h4>
          <h4>{chosenPeople.skin_color}</h4>
  
        </>
           :<>
            <h1>planets: {chosenPeople.name}</h1>
        <h4>planets :{chosenPeople.climate}</h4>
        <h4>{chosenPeople.terrain}</h4>
          <h4>{chosenPeople.surface_water}</h4>
        <h4>planets :{chosenPeople.population}</h4>
      
        </>    
      }</>}
    </div>
  );
};

export default DisplayPeople;
