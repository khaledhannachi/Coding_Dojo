import PersonCard from './components/PersonCard';

import './App.css';

function App() {
  const person = [{
      firstname : "Jane",
      lastname : "Doe",
      age : 45,
      haircolor : "Black",
      },
      {
      firstname : "smith",
      lastname : "john",
      age : 88,
      haircolor : "Brown",
      }
  ]
  return (
    <div className="App">
      <PersonCard person={person}/>
    </div>
  );
}

export default App;
