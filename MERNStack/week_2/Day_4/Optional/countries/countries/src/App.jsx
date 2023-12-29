import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const []
  const fetchCountries=(=>)
  const updateCountry=(idx)=>{
  const newlist=[...countries];
  newlist[idx].independent= !newList[idx].independent;

  };
  const deleteCountry=(idx){
    setCountries(countries.filter((c,i)=>i!==idx));
  };
  

  return (
    <>
     <button onClick={fetchCountries}>Fetch Countries</button>
     <table>
      <thead>
        <tr></tr>
      </thead>
     </table>
    </>
  )
}

export default App
