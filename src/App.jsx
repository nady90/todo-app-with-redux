import "./App.scss";
// Importing libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importing components
import Home from "./routes/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
