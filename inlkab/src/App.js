// src/App.js
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/inc/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contacts from "./components/pages/Contacts";
import Gallery from "./components/pages/Gallery";
import Footer from "./components/pages/Footer";
import LargeFormat from "./components/pages/Largeformat";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/largeformat" element={<LargeFormat />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
export default App;