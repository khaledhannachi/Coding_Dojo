import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Create from "./components/Create";
import Update from "./components/Update";
import ShowOne from "./components/ShowOne";
function App() {
  return (
    <div className="App">
      <h1 className="text-2xl">Favorite Authors</h1>

      <Routes>
        <Route path="/" element={<Navigate to="/authors" />} />

        {/* Read All */}
        <Route path="/authors" element={<Dashboard />} />

        {/* Create Author */}
        <Route path="/authors/:id/new" element={<Create />} />

        {/* Show One Author */}
        <Route path="/authors/:id" element={<ShowOne />} />

        {/* Update Author */}
        <Route path="/authors/:id/edit" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
