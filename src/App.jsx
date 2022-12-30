import React from 'react';
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import Merchandise from "./components/Merchandise"
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/merchandise" element={<Merchandise />} />      
        </Routes>
    </>
  )
}

export default App
