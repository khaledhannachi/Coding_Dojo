import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Color from "./component/Color";
import Home from "./component/Home";
import Four from "./component/Four";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/:num" element={<Four />} />
        <Route path="/:word/:textcolor/:backg" element={<Color />} />
      </Routes>
    </div>
  );
}

export default App;
