import React from "react";
import {  Routes, Route } from "react-router-dom";
import Registro from "../paginas/registro";
import './App.css'; 
import Login from "../paginas/Login";


const App =() =>{
 
 return (
        <>
          <div className="animated-bg h-screen w-full">
            <Routes>
              <Route path="/registro" element = {<Registro />} />
              <Route path="/login" element = {<Login />} />
            </Routes>
          </div>
        </>
 )
  
}

export default App