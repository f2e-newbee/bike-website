import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import Root from "./layout/root";
import { Home, RentBikeQuery, RouteQuery,RouteDetail, ErrorPage } from "./pages";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
              <Route path="/" element={<Home />} />
              <Route path="/rent-bike-query" element={<RentBikeQuery />} />
              <Route path="/route-detail" element={<RouteDetail />}>
                <Route path=":pathName" element={<RouteDetail />} />
              </Route>
              <Route path="/route-query" element={<RouteQuery />} />
          </Route>
          <Route path="*"  element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
