import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, RentBikeQuery, RouteQuery} from "./pages";
import { ErrorPage } from "./pages/error-page/ErrorPage";
import { Provider } from "react-redux";
import store from "./core/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes basename="bike-website">
          <Route exact path="/">
            <Route path="/" element={<Home />} />
            <Route path="/rent-bike-query" element={<RentBikeQuery />} />
            <Route path="/route-query" element={<RouteQuery />} />
            <Route path="*" element={<ErrorPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
