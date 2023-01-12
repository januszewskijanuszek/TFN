//App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import {Add, Sub, Mul, Div} from "./MyMath";

function App() {
  return (
      <Routes>
          <Route path="add" element={<Add/>} />
          <Route path="sub" element={<Sub/>} />
          <Route path="mul" element={<Mul/>} />
          <Route path="div" element={<Div/>} />
      </Routes>
  );
}

export default App;
