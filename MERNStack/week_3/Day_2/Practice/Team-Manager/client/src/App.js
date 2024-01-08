import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Create from "./components/Create";
import { Link } from "react-router-dom";
import Update from "./components/Update";
import ShowOne from "./components/ShowOne";
import Status from "./components/Status";
function App() {
  return (
    <div className="App">
      
    <div className="flex text-center gap-5 m-auto justify-center mt-32">
       <Link to={"/players/list"}>
        <h1 className="text-left font-bold text-lg">Manage Players</h1>
      </Link>
      <Link to={"/status/game/1"}>
        <h1 className="text-left font-bold text-lg">Manage Player Status</h1>
      </Link>
</div>
      <Routes>
        <Route path="/" element={<Navigate to="/players/list" />} />

        {/* Read All */}
        <Route path="/players/list" element={<Dashboard />} />

        {/* Read Status */}
        <Route path="/status/game/1" element={<Status />} />

        {/* Create Author */}
        <Route path="/players/addplayer" element={<Create />} />

        {/* Show One Author */}
        <Route path="/players/:id" element={<ShowOne />} />

        {/* Update Author */}
        <Route path="/players/:id/edit" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
