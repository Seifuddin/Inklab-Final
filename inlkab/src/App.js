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
import Calculator from "./components/pages/Calculator";
import AnimatedHeading from "./components/pages/Text-effects";

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
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/AnimatedHeading" element={<AnimatedHeading />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
export default App;