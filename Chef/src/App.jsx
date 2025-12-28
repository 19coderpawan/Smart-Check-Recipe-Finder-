import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Generator from "./Pages/Generator.jsx";
import Saved from "./Pages/Saved.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";

import ProtectedRoute from "./components/ProtectedRoute.jsx";
export default function App() {
  return (
     <Router>
      <div className="flex flex-col min-h-screen bg-darkbg text-white">
        <Navbar></Navbar>
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* <Route path="/generate" element={<Generator />} /> */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>

             {/* Protected Routes */}
          <Route
            path="/generate"
            element={
              <ProtectedRoute>
                <Generator />
              </ProtectedRoute>
            }
          />

          <Route
            path="/saved"
            element={
              <ProtectedRoute>
                <Saved />
              </ProtectedRoute>
            }
          />
           
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    
  );

}
