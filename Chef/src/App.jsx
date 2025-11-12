import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Generator from "./Pages/Generator.jsx";
// import Saved from "./Pages/Saved.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
     <Router>
      <div className="flex flex-col min-h-screen bg-darkbg text-white">
        
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generate" element={<Generator />} />
           
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    
  );

}
