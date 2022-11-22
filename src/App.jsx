import React from 'react';
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import About from "./components/About"
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom"
import Contact from './components/Contact';


function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />      
        </Routes>
    </>
  )
}

export default App
