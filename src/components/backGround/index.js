import React from "react";
import { ReactComponent as Cell1Icon } from "../../assets/img/cell-1.svg";
import { ReactComponent as Cell2Icon } from "../../assets/img/cell-2.svg";
import { ReactComponent as Cell3Icon } from "../../assets/img/cell-3.svg";
import { ReactComponent as Cell4Icon } from "../../assets/img/cell-4.svg";
import { ReactComponent as Cell5Icon } from "../../assets/img/cell-5.svg";
import { ReactComponent as Cell6Icon } from "../../assets/img/cell-6.svg";
import { Home, RentBikeQuery, RouteQuery } from "../../pages";
import { Routes, Route } from "react-router-dom";

/**
 * 背景軟泥圖
 */
const BackGround = () => {
  return (
    <div className="h-full bg-beige overflow-hidden relative md:overflow-hidden">
      <Cell1Icon className="absolute right-0 transform md:translate-x-1/3 md:-translate-y-1/3 translate-x-1/2 -translate-y-1/2" />
      <Cell2Icon className="absolute right-0 top-1/2 transform translate-x-1/4" />
      <Cell3Icon className="absolute right-1/5 top-1/5 " />
      <Cell4Icon className="absolute left-0 transform translate-x-36 translate-y-16 hidden md:block" />
      <Cell5Icon className="absolute left-0 transform -translate-x-1/3 translate-y-32" />
      <Cell6Icon className="absolute left-0 bottom-0 transform -translate-x-10 translate-y-20" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rent-bike-query" element={<RentBikeQuery />} />
        <Route path="/route-query" element={<RouteQuery />} />
      </Routes>
    </div>
  );
};

export default BackGround;
