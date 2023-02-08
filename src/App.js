import "./App.css";
import React from "react";
import AppBar from "./Components/AppBar/AppBar";
import { Navigate, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/proyects" element={<div>Proyectos</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
     
    </>
  );
}

export default App;