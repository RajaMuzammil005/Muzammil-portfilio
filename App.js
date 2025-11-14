import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Background from "./components/Background/Background"
import About from "./pages/About/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Background />
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="page-content">
        <Routes>
          
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
