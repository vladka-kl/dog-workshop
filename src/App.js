import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Cats from "./pages/cats/index";
import Dogs from "./pages/dogs/index";
import Home from "./pages/home/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/cats" element={<Cats />} />
      </Routes>
    </div>
  );
}

export default App;
