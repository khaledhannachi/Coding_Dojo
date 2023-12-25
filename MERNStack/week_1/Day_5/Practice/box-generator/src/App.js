import { useState } from "react";
import Add from './components/Add';
import Display from './components/Display';
import './App.css';

function App() {
  const box = [{
    height: "200px",
  width: "200px",
  background: "#ff0000",
  },
{
  height: "200px",
  width: "200px",
  background: "#800080",
  },

{
  height: "200px",
width: "200px",
 background: "#008000",
  },
  ]
const [boxes, setBoxes]=useState(box)

return (
  <div className="App">
    <Add boxes={boxes} setBoxes={setBoxes} />
    <Display box = {boxes}/>
  </div>
);
};

export default App;