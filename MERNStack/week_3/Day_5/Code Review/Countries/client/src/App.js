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
        <Route path="/" element={<Navigate to="/countries" />} />

        {/* Read All */}
        <Route path="/countries" element={<Dashboard />} />

        {/* Create Author */}
        <Route path="/countries/:id/new" element={<Create />} />

        {/* Show One Author */}
        <Route path="/countries/:id" element={<ShowOne />} />

        {/* Update Author */}
        <Route path="/countries/:id/edit" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
