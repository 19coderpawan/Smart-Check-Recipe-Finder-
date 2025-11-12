import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Generator from "./Pages/Generator.jsx";
// import Saved from "./Pages/Saved.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
     <Router>
      
    
    <main className="flex-1 p-4">
  <h1 className="text-3xl font-bold text-white">Hello from App</h1>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/generate" element={<Generator />} />
    {/* <Route path="/saved" element={<Saved />} /> */}
  </Routes>
</main>
 </Router>
  );
  

}
