import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, RentBikeQuery, RouteQuery } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent-bike-query" element={<RentBikeQuery />} />
        <Route path="/route-query" element={<RouteQuery />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
