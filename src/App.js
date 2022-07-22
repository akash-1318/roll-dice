import "./App.css";
import { Welcome, Game } from "./pages/index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
