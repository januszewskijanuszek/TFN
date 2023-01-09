//App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Services,
  Contact,
    Us,
    Pl,
    De,
    Error
} from "./pagesController";
import {Navigate} from "react-router";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About/>}/>
          <Route path="services" element={<Services/>}/>
          <Route path="contact" element={<Contact/>}>
            <Route path="pl" element={<Pl/>}/>
            <Route path="de" element={<De/>}/>
            <Route path="us" element={<Us/>}/>
          </Route>
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
