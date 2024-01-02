import { Routes, Route } from "react-router-dom";
import "./App.css";
import Update from "./components/Update";
import LandingPage from "./components/LandingPage";
import ShowOne from "./components/ShowOne";
import Products from "./components/Products";
function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Routes>
        <Route path="/" element={< LandingPage />} />
        <Route path="/products" element={< Products />} />
        <Route path="/products/:id" element={< ShowOne />} />
        <Route path="/products/:id/edit" element={< Update />} />
      </Routes>
    </div>
  );
}

export default App;
