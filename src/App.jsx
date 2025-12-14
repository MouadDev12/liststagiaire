import React,{useState} from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from "./Navbar";
import liststagiaire from "./components/liststagiaire";
import AddStagiaire from "./AddStagiaire";
import "./bootstrap.min.css";


function list() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<liststagiaire/>}/>
        <Route path="/add" element={<AddStagiaire/>}/>
      </Routes>
    </Router>
  )

  
}

export default list;
