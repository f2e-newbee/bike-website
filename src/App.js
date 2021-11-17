import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, RentBikeQuery, RouteQuery } from "./pages";
import { Provider } from "react-redux";
import store from "./core/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rent-bike-query" element={<RentBikeQuery />} />
          <Route path="/route-query" element={<RouteQuery />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
