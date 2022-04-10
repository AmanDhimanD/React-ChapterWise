import "./App.css";
import React from "react";

import {Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import TopNavbar from "./components/TopNavbar";


function App() {
  return (
    <>
      <TopNavbar title="RayneCoder" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
