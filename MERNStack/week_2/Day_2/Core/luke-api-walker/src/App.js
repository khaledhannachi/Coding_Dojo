import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Form from './components/Form';
import DisplayPeople from './components/DisplayPeople';
import Error from "./components/Error";
import './App.css';

function App() {
  return (
    <div className="App">
      <Form />
        <Routes>
        <Route path="/" element={<h1></h1>} />
        <Route path="/:selected/:Id" element={<DisplayPeople />} />
        <Route path="*" element={<Error />} />
        </Routes>


    </div>
  );
}

export default App;
