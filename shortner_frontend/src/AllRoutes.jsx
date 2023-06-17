import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Feature from "./Pages/Feature/Feature";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/Feature" element={<Feature />} />
    </Routes>
  );
};

export default AllRoutes;
