import "./App.css";
import React from "react";
import AppBar from "./Components/AppBar/AppBar";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Proyects from "./Components/Proyects/Proyects";
import Contact from "./Components/Contact/Contact";
import Stack from "./Components/Stack/Stack";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route path="/" element={<Home />} />
          <Route path="proyects" element={<Proyects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="stack" element={<Stack />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
