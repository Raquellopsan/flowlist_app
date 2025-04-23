import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Registro from "../paginas/registro";
import "./App.css";
import Login from "../paginas/Login";
import Dashboard from "../paginas/Dashboard";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("userLoggedIn")) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <div className="animated-bg h-screen w-full">
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
