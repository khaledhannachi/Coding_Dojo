import './App.css';
import PersonCard from './components/PersonCard';
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
    }, 
    {
    firstname : "Fillmore",
    lastname : "Millard",
    age : 50,
    haircolor : "Brown",
    }, 
    {
    firstname : "Fillmore",
    lastname : "Millard",
    age : 62,
    haircolor : "Brown",
    }];
    
  return (
    <div className="App">
       <PersonCard person={person}/>
    </div>
  );
}

export default App;
